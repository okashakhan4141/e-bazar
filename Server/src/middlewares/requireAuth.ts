import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../common/notAuthorized-error";
import { User } from "../models/user";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    const reqCopy: any = req;

    try {
        if (reqCopy.session.userId) {
            const user = await User.findById(reqCopy.session.userId);
            reqCopy.user = user;

            return next();
        }
    } catch (err: any) {
        throw new NotAuthorizedError();
    }

    throw new NotAuthorizedError();
}