import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer, primaryKey } from "drizzle-orm/sqlite-core";

export const designTokens = sqliteTable('design_tokens', {
  key: text('key').notNull().primaryKey(),
  value: text('value').notNull()
});

export const subscribers = sqliteTable('subscribers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`)
});