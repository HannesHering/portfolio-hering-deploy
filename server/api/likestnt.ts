import { db } from "../utils/db";
import { likesTnt } from "~/schema";
import { eq, sql } from "drizzle-orm";


export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const count = await db.select({field1: likesTnt.id}).from(likesTnt);

    if (count.length === 0) {
    await db.insert(likesTnt).values({
        id: body.id,
        likes: body.likes
    }).execute(); 
    }

    await db
      .update(likesTnt)
      .set({ likes: sql.raw('likes + 1') })
      .execute();

    return { 
        id: body.id,
        likes: body.likes
     }
}) 
