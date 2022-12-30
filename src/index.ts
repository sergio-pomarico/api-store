import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import router from './routes';

const app: Application = express();
dotenv.config();

app.use('/api/v1', router);

app.listen(process.env.PORT, () =>
  console.log(`🚀 server run on port ${process.env.PORT}`),
);
