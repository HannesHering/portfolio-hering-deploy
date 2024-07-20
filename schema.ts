import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const contactRequest = sqliteTable('contactRequest', {
  email: text('email').notNull(),
  subject: text('subject'),
  message: text('message').notNull(),
});

export const commentRequest = sqliteTable('commentRequest', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
  message: text('message').notNull(),
  project: text('project')
});

export const likesVptracker = sqliteTable('likesVptracker', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  likes: integer('likes').default(0),
});

export const likesTnt = sqliteTable('likesTnt', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  likes: integer('likes').default(0),
});