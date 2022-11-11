const otpGenerator = require('otp-generator');
var jwt = require('jsonwebtoken');

import { BadRequestError } from "../common/badRequest-error";
import { OTP } from "../config";

export const generateOTP = () => otpGenerator.generate(6, OTP);

export const generateJWT = (data: any) => {
    return jwt.sign({
        data
    }, process.env.JWT_SECRET, { expiresIn: 10 * 60 }); // 10 mins
}

export const verifyJWT = (token: any) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err: any) {
        console.log('JWT ERROR: ', err.message);
        throw new BadRequestError('Invalid or expired token passed!')
    }
}