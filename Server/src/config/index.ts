const cookieSession = require('cookie-session');

export const corsOptions = {
    allowedHeaders: 'Content-Type,idtoken',
    origin: '*',
    exposedHeaders: 'idtoken',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionSuccessStatus: 200,
};

export const session = cookieSession({
    signed: false,
    // secure: true,
    name: 'session',
    secret: 'hyfyfyufyf yfy',
    maxAge: 1 * 60 * 60 * 1000 // 1 hours
});

export const OTP = {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false
}