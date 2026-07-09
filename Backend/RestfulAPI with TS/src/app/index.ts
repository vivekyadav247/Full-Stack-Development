import express from "express";
import type {Express} from "express" ;

export function createApplication(): Express{
    const app = express() ;

    app.get("/", (req, res) => {
        return res.json({ message: "Welcome to the Restful API with TypeScript" }) ;
    })


    return app ;
}