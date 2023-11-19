import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { router } from './router';
import ngrok from 'ngrok';

const app = express();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const dbInfo = {
  atlas: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.5rmv5q5.mongodb.net`,
  urlDev: 'mongodb://localhost:27017'
}

mongoose.set('strictQuery', false);

mongoose.connect(dbInfo.atlas)
  .then(() => {
    const PORT = process.env.PORT ?? 3002;

    app.use(cors())
    app.use(express.json());
    app.use(router)

    app.listen(PORT, () => {
      ngrok.connect({
        addr: PORT,
      }).then((url) => {
        console.log(`The server started at ${url}`)
      })
    });
  })
  .catch((err) => console.error(`Mongo is failed: ${err}`))
