import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    // Validar se o token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    // Vai ignorar a primeira posição e guaradar a segunda posição na variável token.
    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "859f701b1f63c2e88a51bb5f629acc3e") as IPayload;

        request.user_id = sub;

        return next();

    } catch (error) {
        return response.status(401).end();
    }


}