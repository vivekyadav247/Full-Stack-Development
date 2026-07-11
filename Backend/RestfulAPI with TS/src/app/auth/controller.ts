import type { Request, Response } from "express";
import {signupPayloadModel, signinPayloadModel} from "./models.js";
import { db } from "../../db/index.js";
import { usersTable } from "../../db/schema.js";
import { eq } from "drizzle-orm" ;
import { createHmac, randomBytes } from "node:crypto";
import { createUserToken } from "./utils/token.js";

class AuthenticationController {
    public async handleSignup(req: Request, res: Response){
        const validationResult = await signupPayloadModel.safeParseAsync(req.body) ;

        if(validationResult.error) return res.status(400).json({error: validationResult.error.issues}) ;

        const {firstName, lastName, email, password} = validationResult.data ;

        const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, email)) ;

        if(existingUser.length > 0) {
            return res.status(400).json({error: "User already exists"}) ;
        }

        const salt = randomBytes(32).toString("hex") ;
        const hash = createHmac("sha256", salt).update(password).digest("hex")

        const [result] = await db.insert(usersTable).values({
            firstName,
            lastName,
            email,
            password: hash,
            salt
        }).returning({id: usersTable.id}) ;

        return res.status(201).json({message: "User created successfully", data: {id:result?.id}}) ;
    }

    public async handleSingin(req: Request, res: Response){
        const validationResult = await signinPayloadModel.safeParseAsync(req.body) ;

        if(validationResult.error) return res.status(400).json({error: validationResult.error.issues}) ;

        const {email, password} = validationResult.data ;

        const [userSelect] = await db.select().from(usersTable).where(eq(usersTable.email, email)) ;
        if(!userSelect) {
            return res.status(400).json({error: "Invalid credentials"}) ;
        }

        const salt = userSelect.salt! ;
        const hash = createHmac("sha256", salt).update(password).digest("hex") ;

        if(hash !== userSelect.password) {
            return res.status(400).json({error: "Invalid credentials"}) ;
        }

        // TODO: Generate JWT token and send it in response
        const token = createUserToken({id: userSelect.id}) ;

        return res.status(200).json({message: "Signin successful", token}) ;
    }
}

export default AuthenticationController;