import {pgTable, text, uuid, varchar, boolean, timestamp} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: uuid('id').primaryKey().defaultRandom(),

    firstName: varchar("first_name", {length : 50}).notNull(),
    lastName: varchar("last_name", {length : 50}),

    email: varchar("email", {length : 100}).notNull().unique(),
    emailVerified: boolean("email_verified").default(false).notNull(),

    password: varchar("password", {length : 66}),
    salt: text("salt"),

    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});