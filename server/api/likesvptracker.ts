import { db } from "../utils/db";
import { likesVptracker } from "~/schema";
import { eq, sql } from "drizzle-orm";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const count = await db.select({field1: likesVptracker.id}).from(likesVptracker);

    if (count.length === 0) {
    await db.insert(likesVptracker).values({
        id: body.id,
        likes: body.likes
    }).execute(); 
    }

    await db
      .update(likesVptracker)
      .set({ likes: sql.raw('likes + 1') })
      .execute();

    return { 
        id: body.id,
        likes: body.likes
     }
}) 