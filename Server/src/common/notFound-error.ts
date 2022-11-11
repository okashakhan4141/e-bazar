import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {

    constructor() {
        super('Not Found!', 404);
    }
}
