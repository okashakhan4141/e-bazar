const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

export const sendSMS = async (body: string, phoneNumber: string) => {

    try {
        return await client.messages
            .create({
                body,
                messagingServiceSid: process.env.TWILIO_SENDER_ID,
                to: phoneNumber
            });
        // console.log(response);

    } catch (err: any) {
        console.log(err.message);
    }


    // .then((message: any) => console.log(message.sid))
    // .done();
}