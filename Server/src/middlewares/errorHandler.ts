import { Request, Response, NextFunction } from "express";
import { CustomError } from "../common/custom-error";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode = 500;
    let message = 'Internal Server Error!';
    if (err instanceof CustomError) {
        console.log(err.stack);
        statusCode = err.code;
        message = err.message || 'Something went wrong!';
    }

    res.status(statusCode).send({
        "errors": [
            {
                "message": message
            }
        ]
    });
}