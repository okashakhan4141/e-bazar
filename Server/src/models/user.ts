import mongoose from 'mongoose';
import { Phone } from './phoneNumber';
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

interface UserAttrs {
    firstName: string;
    lastName: string;
    avatar?: string;
    role: string;
    phoneNumber: string;
    phoneId: string;
    password: string;
    email: string;
    postalCode: number;
    city: string;
    address: string;
    resetOtp: number;
    resetOtpExpiryTime: Date;
}

interface UserDoc extends mongoose.Document {
    firstName: string;
    lastName: string;
    avatar?: string;
    role: string;
    phoneId: string;
    phoneNumber: string;
    password: string;
    email: string;
    postalCode: number;
    city: string;
    address: string;
    resetOtp: number;
    resetOtpExpiryTime: Date;
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: '',
        },
        role: {
            type: String,
            enum: ['USER', 'ADMIN'],
            required: true,
            default: 'USER',
        },
        phoneId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Phone',
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minLength: [8, 'Password must be greater than or equal to 8 characters!'],
            select: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        postalCode: {
            type: Number,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        resetOtp: {
            type: Number,
            default: null
        },
        resetOtpExpiryTime: {
            type: Date,
            default: null
        }
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret.resetOtp;
                delete ret.resetOtpExpiryTime;
                delete ret._id;
                delete ret.__v;
                delete ret.password;
            },
        },
    }
);


userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const currentDoc: any = this;
        currentDoc.password = await bcrypt.hash(currentDoc.password, 10);
    }
});

userSchema.pre('remove', async function (next) {
    const currentDoc: any = this;
    await Phone.deleteOne({ _id: currentDoc.phoneId });
});

userSchema.methods.matchPassword = async function (currPass) {
    const currentDoc: any = this;
    return await bcrypt.compare(currPass, currentDoc.password);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };