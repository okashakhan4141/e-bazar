import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { BadRequestError } from "../common/badRequest-error";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const error: any = validationResult(req);

    if (!error.isEmpty()) {
        throw new BadRequestError(error.errors[0].msg);
    }

    next();
};
