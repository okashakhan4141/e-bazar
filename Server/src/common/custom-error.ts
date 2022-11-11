export class CustomError extends Error {
    code: number;

    constructor(message: string | undefined, statusCode: number) {
        super(message);
        this.code = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}
