import express from 'express';
import { body } from 'express-validator';

import { isAdmin } from '../middlewares/isAdmin';
import { requireAuth } from '../middlewares/requireAuth';

import { getAllProducts } from '../controllers/product';

const router = express.Router();

const productRoute = `${process.env.BASE_ROUTE}/product`;

router.get(`${productRoute}/get-all-products`, getAllProducts);

export { router as ProductRoutes };
