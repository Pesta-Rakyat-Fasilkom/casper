import { sql } from "drizzle-orm";
import {
  pgTable,
  pgEnum,
  pgSchema,
  uuid,
  varchar,
  text,
  timestamp,
  integer,
  boolean,
  check,
} from "drizzle-orm/pg-core";

// ENUMS
export const elemenEnum = pgEnum("elemen", [
  "mahasiswa",
  "dosen",
  "kantin",
  "staff",
  "alumni",
]);

export const angkatanEnum = pgEnum("angkatan", [
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
]);

export const teamStatusEnum = pgEnum("team_status", [
  "not_verified",
  "waiting_for_verification",
  "verified",
  "verification_failed",
]);

// Reference: https://github.com/drizzle-team/drizzle-orm/issues/956#issuecomment-2469592018
const timestamps = {
  created_at: timestamp({ withTimezone: true, mode: "string" })
    .default(sql`(now() AT TIME ZONE 'utc'::text)`)
    .notNull(),
  updated_at: timestamp({ withTimezone: true, mode: "string" })
    .default(sql`(now() AT TIME ZONE 'utc'::text)`)
    .notNull()
    .$onUpdate(() => sql`(now() AT TIME ZONE 'utc'::text)`),
};

// NOTE: run 'pnpm drizzle-kit push' to apply changes to Supabase
const authSchema = pgSchema("auth");

export const users = authSchema.table("users", {
  id: uuid("id").primaryKey(),
  email: text("email").notNull().unique(),
  ...timestamps,
});

export const profiles = pgTable("profiles", {
  user_id: uuid("user_id")
    .references(() => users.id)
    .primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  fullname: varchar("fullname", { length: 255 }),
  line_id: text("line_id").unique(),
  whatsapp_number: text("whatsapp_number").unique(),
  elemen: elemenEnum(),
  angkatan: angkatanEnum(),
  ...timestamps,
});

export const competitions = pgTable(
  "competitions",
  {
    id: uuid("id").primaryKey(),
    min_member: integer("min_member").notNull(),
    max_member: integer("max_member").notNull(),
    is_team_competition: boolean("is_team").notNull(),
    name: varchar("name", { length: 255 }).notNull().unique(),
    description: text("description"),
    image_url: text("image_url"),
    registration_fee: integer("registration_fee").notNull(),
    start_date: timestamp("start_date").notNull(),
    end_date: timestamp("end_date").notNull(),
    timeline: text("timeline"),
    contact_person: text("contact_person"),
    line_group_url: text("line_group_url"),
    ...timestamps,
  },
  (table) => [
    check("member_check", sql`${table.min_member} <= ${table.max_member}`),
    check("date_check", sql`${table.start_date} < ${table.end_date}`),
    check("fee_check", sql`${table.registration_fee} >= 0`),
    check(
      "team_competition_check",
      sql`(${table.is_team_competition} = true AND ${table.min_member} > 1)
      OR (${table.is_team_competition} = false AND ${table.min_member} = 1 AND ${table.max_member} = 1)`,
    ),
  ],
);

export const teams = pgTable("teams", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  status: teamStatusEnum(),
  competition_id: uuid("competition_id").references(() => competitions.id, {
    onDelete: "cascade",
  }),
  ...timestamps,
});

export const members = pgTable("members", {
  id: uuid("id").primaryKey(),
  team_id: uuid("team_id").references(() => teams.id, { onDelete: "cascade" }),
  profile_id: uuid("profile_id").references(() => profiles.id, {
    onDelete: "cascade",
  }),
  role: varchar("role", { length: 255 }),
  in_game_name: varchar("in_game_name", { length: 255 }),
  is_captain: boolean("is_captain").notNull(),
  ...timestamps,
});
