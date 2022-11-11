import express from 'express';
import { body } from 'express-validator';

// Middlewares
import { isAdmin } from '../middlewares/isAdmin';
import { requireAuth } from '../middlewares/requireAuth';
import { verifyPhone } from '../middlewares/verifyPhone';

// Controllers
import {
    registerUser, login, logout, sendOTP, verifyOTP, updateUserInfo, deleteUserProfile,
    updatePhoneNumber, sendForgotPassOTP, verifyForgotPassOTP, resetPassword
} from '../controllers/user';

const router = express.Router();

const productRoute = `${process.env.BASE_ROUTE}/user`;

router.post(`${productRoute}/register-new`, verifyPhone, registerUser);
router.post(`${productRoute}/login`, login);
router.get(`${productRoute}/logout`, logout);
router.post(`${productRoute}/verification/phone-number/send-otp`, sendOTP);
router.post(`${productRoute}/verification/phone-number/verify-otp`, verifyOTP);
router.put(`${productRoute}/update-profile`, requireAuth, updateUserInfo);
router.delete(`${productRoute}/delete-profile`, requireAuth, deleteUserProfile);
router.put(`${productRoute}/update-phone`, requireAuth, updatePhoneNumber);
router.post(`${productRoute}/forgot-password/send-otp`, sendForgotPassOTP);
router.post(`${productRoute}/forgot-password/verify-otp`, verifyForgotPassOTP);
router.post(`${productRoute}/forgot-password/reset`, resetPassword);

export { router as UserRoutes };
