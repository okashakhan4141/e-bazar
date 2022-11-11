import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {

    constructor() {
        super('Not Authorized!', 401);
    }
}
