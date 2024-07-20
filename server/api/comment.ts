import { commentRequest } from "~/schema";
import { db } from "../utils/db";


export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    await db.insert(commentRequest).values({
        id: body.id,
        name: body.name,
        message: body.message,
        project: body.project
    }).execute();

    return { 
        id: body.id,
        name: body.name,
        message: body.message,
        project: body.project
     }
}) 