import mongoose from 'mongoose';
const { Schema } = mongoose;

interface PhoneAttrs {
    number: string;
    isVerified: boolean;
    otp: number;
    otpRequestedTime: Date;
    otpExpiryTime: Date;
}

interface PhoneDoc extends mongoose.Document {
    number: string;
    isVerified: boolean;
    otp: number;
    otpRequestedTime: Date;
    otpExpiryTime: Date;
}

interface PhoneModel extends mongoose.Model<PhoneDoc> {
    build(attrs: PhoneAttrs): PhoneDoc;
}

const phoneSchema = new Schema(
    {
        number: {
            type: String,
            required: true,
            unique: true
        },
        isVerified: {
            type: Boolean,
            required: true,
            default: false
        },
        otp: {
            type: Number,
            required: true,
        },
        otpRequestedTime: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        otpExpiryTime: {
            type: Date,
            required: true,
            default: Date.now() + (5 * 60 * 1000) // 5 min
        }
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret.otp;
                delete ret.otpExpiryTime;
                delete ret.otpRequestedTime;
                delete ret._id;
                delete ret.__v;
            },
        },
    }
);


phoneSchema.statics.build = (attrs: PhoneAttrs) => {
    return new Phone(attrs);
};

const Phone = mongoose.model<PhoneDoc, PhoneModel>('Phone', phoneSchema);

export { Phone };