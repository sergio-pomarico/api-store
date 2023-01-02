import express, { Application } from 'express';

import router from './routes';

const app: Application = express();

app.use('/api/v1', router);

export default app;
