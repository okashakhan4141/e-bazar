import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../common/notFound-error";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    throw new NotFoundError();
}