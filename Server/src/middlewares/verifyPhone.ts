import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../common/badRequest-error";
import { Phone } from "../models/phoneNumber";
import { handleAsync } from "../utils/handleAsync";

export const verifyPhone = handleAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { phoneNumber, phoneId } = req.body;

    const phone = await Phone.findOne({ _id: phoneId, number: phoneNumber, isVerified: true });
    if (phone) {
        return next();
    }

    throw new BadRequestError('Incorrect Phone number or Phone ID!');
});