import { db } from "../utils/db";
import { likesVptracker } from "~/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {

    const result = await db.select().from(likesVptracker).all();

    return { 
        result,
     }
}) 