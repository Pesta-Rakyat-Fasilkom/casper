import { drizzle } from "drizzle-orm/postgres-js";
import { users } from "./schema";
import postgres from "postgres";

export const client = postgres(process.env.DATABASE_URL!, { prepare: false });
export const db = drizzle(client);

const allUsers = await db.select().from(users);
console.log(allUsers);
