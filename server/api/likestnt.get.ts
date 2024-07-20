import { db } from "../utils/db";
import { likesTnt } from "~/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {

    const result = await db.select().from(likesTnt).all();

    return { 
        result,
     }
}) 