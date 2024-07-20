import { contactRequest } from "~/schema";
import { db } from "../utils/db";


export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    await db.insert(contactRequest).values({
        email: body.email,
        subject: body.subject,
        message: body.message
    }).execute();

    return { 
        email: body.email,
        subject: body.subject,
        message: body.message
     }
}) 
