import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../common/badRequest-error";
import { CustomError } from "../common/custom-error";

export const handleAsync = (promise: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await Promise.resolve(promise(req, res, next));
        } catch (err: any) {
            console.log(err.message);

            const message = err instanceof CustomError ? err.message : undefined;
            throw new BadRequestError(message);
        }
    }
}
