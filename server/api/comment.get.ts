import { commentRequest } from "~/schema";
import { db } from "../utils/db";


export default defineEventHandler(async (event) => {

    const result = await db.select().from(commentRequest).all();

    return { 
        result,
     }
}) 