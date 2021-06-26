import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";

import "./database";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

//middleware de erro
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    // Verificando se é uma instancia da classe Error.
    if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
    }

    return response.status(500).json({ status: "error", message: "Internal server Error"})
})


// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));