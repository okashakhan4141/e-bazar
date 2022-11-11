import { Request, Response, NextFunction } from "express";
import { handleAsync } from "../utils/handleAsync";
import { generateOTP } from "../utils/helperFunctions";
import { sendSMS } from "../utils/sms";

export const getAllProducts = handleAsync(async (req: any, res: Response, next: NextFunction) => {


    // console.log(req);
    // const test = await sendSMS();
    // console.log(test);

    console.log(generateOTP());

    // const reqObj: any = req;
    // console.log(reqObj.session);
    // req.session.userId = '62949892be463d8b6c3b5c3a';
    // req.session = null;

    // console.log(req.session);

    res.status(200).send({
        data: 'Hello World!'
    });
});