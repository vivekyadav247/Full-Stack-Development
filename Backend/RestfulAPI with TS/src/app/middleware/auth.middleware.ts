import type { Request, Response, NextFunction } from "express" ;
import { usersTable } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { verifyUserToken } from "../auth/utils/token.js";
import { db } from "../../db/index.js";


export function authenticationMiddleware() {
    return function(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization ;
        if(!authHeader) {
            next() ;
        }

        if(!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({error: "Invalid authorization header"}) ;
        }

        const token = authHeader.split(" ")[1] ;
        if(!token) {
            return res.status(401).json({error: "Invalid authorization header"}) ;
        }

        const user = verifyUserToken(token) ;
        
        //@ts-ignore
        req.user = user ;

        next() ;

    }
}

export function restrictToAuthenticatedUsers() {
    return function(req: Request, res: Response, next: NextFunction) {
        //@ts-ignore
        if(!req.user) {
            return res.status(401).json({error: "Unauthorized"}) ;
        }
        next() ;
    }
}