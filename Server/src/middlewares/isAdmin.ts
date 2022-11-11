import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../common/notAuthorized-error";

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const reqCopy: any = req;

    if (reqCopy.user && reqCopy.user.role == 'ADMIN') {
        return next();
    }

    throw new NotAuthorizedError();
}