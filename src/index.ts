import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { router } from './router';

const app = express();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const dbInfo = {
  atlas: `mongodb+srv://${dbUser}:${dbPassword}@ame-pet.uqal0u8.mongodb.net/`,
  urlDev: 'mongodb://localhost:27017'
}

mongoose.set('strictQuery', false);

mongoose.connect(dbInfo.urlDev)
  .then(() => {
    const PORT = process.env.PORT ?? 3001;

    app.use(cors())
    app.use(express.json());
    app.use(router)

    app.listen(PORT, () => console.debug(`Server started at http://localhost:${PORT}`));
  })
  .catch((err) => console.error(`Mongo is failed: ${err}`))
