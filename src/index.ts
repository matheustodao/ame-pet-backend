import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import { router } from './router';

const app = express();

const dbInfo = {
  atlas: process.env.MONGO_URL ?? '',
  urlDev: 'mongodb://localhost:27017'
}

mongoose.set('strictQuery', false);

mongoose.connect(dbInfo.atlas)
  .then(() => {
    const PORT = process.env.PORT ?? 3000;

    app.use(cors())
    app.use(express.json());
    app.use(router)

    app.listen(PORT, () => console.log(`App started at ṕort ${PORT}`));
  })
  .catch((err) => console.error(`Mongo is failed: ${err}`))
