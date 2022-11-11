import { Request, Response, NextFunction } from "express";
import { handleAsync } from "../utils/handleAsync";
import { User } from "../models/user";
import { BadRequestError } from "../common/badRequest-error";
import { generateJWT, generateOTP, verifyJWT } from "../utils/helperFunctions";
import { sendSMS } from "../utils/sms";
import { Phone } from "../models/phoneNumber";

export const registerUser = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    const user = await new User(req.body).save();

    // Creating User Session
    const reqCopy: any = req;
    reqCopy.session.userId = user.id;

    res.status(200).send({
        results: {
            message: "Your account has been created successfully!",
            data: user
        },
    });
});

export const login = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { phoneNumber, password } = req.body;
    const user: any = await User.findOne({ phoneNumber }).select('+password').populate('phoneId');

    if (user && await user.matchPassword(password)) {
        // Creating User Session
        const reqCopy: any = req;
        reqCopy.session.userId = user.id;

        res.status(200).send({
            results: {
                message: "You'be been logged in successfuly!",
                data: user
            },
        });
    }
    else {
        throw new BadRequestError('Invalid Phone number or Password!');
    }
});

export const logout = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    // Deleting User Session
    const reqCopy: any = req;
    reqCopy.session = null

    res.status(200).send({
        results: {
            message: "You'be been logged out successfuly!"
        },
    });
});

export const sendOTP = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { phoneNumber } = req.body;

    const phone = await Phone.findOne({ number: phoneNumber });
    const otp = generateOTP();

    if (!phone) {
        await new Phone({ number: phoneNumber, otp }).save();
    } else {
        phone.otp = otp;
        phone.otpRequestedTime = new Date();
        phone.otpExpiryTime = new Date(new Date().getTime() + (5 * 60 * 1000));

        await phone.save();
    }

    const smsBody = `Your OTP for phone verification is ${otp}. This is valid for 5 minutes only!\nIf you havn't requested this, please contact eBazar administration!`;
    const smsRes = await sendSMS(smsBody, phoneNumber);
    if (!smsRes) throw new BadRequestError('Failed to send OTP, Please try again later!');

    res.status(200).send({
        results: {
            message: "OTP sent successfuly!",
        },
    });
});

export const verifyOTP = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { phoneNumber, otp } = req.body;

    const phone = await Phone.findOne({ number: phoneNumber, otp });
    if (!phone) throw new BadRequestError("Invalid OTP or Phone number!");

    if (phone.otpExpiryTime <= new Date()) throw new BadRequestError('OTP expired. Please request a new one!');

    phone.isVerified = true;
    await phone.save();

    res.status(200).send({
        results: {
            message: "OTP verification successful!",
            data: {
                phoneId: phone.id,
            }
        },
    });
});

export const updateUserInfo = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    const reqCopy: any = req;

    const { firstName, lastName, avatar, email, postalCode, city, address } = req.body;
    const { _id: userId } = reqCopy.user;

    const updateObj = { firstName, lastName, avatar, email, postalCode, city, address };
    const updateOptions = { new: true };

    const updatedUser = await User.findOneAndUpdate({ _id: userId }, updateObj, updateOptions);

    res.status(200).send({
        results: {
            message: "User details updated successfuly!",
            data: updatedUser
        },
    });
});

export const deleteUserProfile = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    const reqCopy: any = req;
    const { _id: userId } = reqCopy.user;

    const user: any = await User.findById(userId);

    await user.remove();
    reqCopy.session = null

    res.status(200).send({
        results: {
            message: "Account deleted successfuly!"
        },
    });
});

export const updatePhoneNumber = handleAsync(async (req: Request, res: Response, next: NextFunction) => {



    res.status(200).send({
        results: {
            message: "update phone number"
        },
    });
});

export const sendForgotPassOTP = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { phoneNumber } = req.body;
    const user = await User.findOne({ phoneNumber });
    if (!user) throw new BadRequestError('No user found against this phone number!');

    const otp = generateOTP();

    user.resetOtp = otp;
    user.resetOtpExpiryTime = new Date(new Date().getTime() + (5 * 60 * 1000));
    await user.save();

    const smsBody = `Your OTP for password reset is ${otp}. This is valid for 5 minutes only!\nIf you havn't requested this, please contact eBazar administration!`;
    const smsRes = await sendSMS(smsBody, phoneNumber);
    if (!smsRes) throw new BadRequestError('Failed to send OTP, Please try again later!');

    res.status(200).send({
        results: {
            message: "OTP sent to reset password!"
        },
    });
});

export const verifyForgotPassOTP = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { phoneNumber, otp } = req.body;

    const user = await User.findOne({ phoneNumber, resetOtp: otp });
    if (!user) throw new BadRequestError("Invalid OTP or Phone number!");

    if (user.resetOtpExpiryTime <= new Date()) throw new BadRequestError('OTP expired. Please request a new one!');

    const token = generateJWT(user._id);

    res.status(200).send({
        results: {
            message: "OTP verification for password reset successful!",
            data: {
                resetToken: token
            }
        },
    });
});

export const resetPassword = handleAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { newPassword, resetToken } = req.body;

    const { data: id } = verifyJWT(resetToken);
    const user: any = await User.findById(id);

    user.password = newPassword;
    user.save();

    res.status(200).send({
        results: {
            message: "Password reset successful!"
        },
    });
});