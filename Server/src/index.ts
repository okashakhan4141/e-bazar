require('dotenv').config();

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import { session } from './config';

import { errorHandler } from './middlewares/errorHandler';
import { notFound } from './middlewares/notFound';

// Route Imports
import { ProductRoutes } from './routes/product';
import { UserRoutes } from './routes/user';

const app = express();

app.set('trust proxy', true);
app.use(json());
app.use(session);

// Routes
app.use(ProductRoutes);
app.use(UserRoutes);

app.all('*', notFound);
app.use(errorHandler);

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!, { useFindAndModify: false });

    app.listen(process.env.PORT, () => {
      console.log(process.env.APP_NAME + ' - Connected to MongoDb');
      console.log(process.env.APP_NAME + ' - Listening on port ' + process.env.PORT);
    });
  } catch (err) {
    console.error(err);
  }
};

start();