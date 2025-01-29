import { pgSchema, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

const authSchema = pgSchema('auth');

const users = authSchema.table('users', {
  id: uuid('id').primaryKey(),
});

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey().references(() => users.id),
  fullname: varchar('fullname', { length: 255 }),
});
