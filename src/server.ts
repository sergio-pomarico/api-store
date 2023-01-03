import express, { Application } from 'express';

import router from './routes';

export class Server {
  public app: Application = express();
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use('/api/v1', router);
    this.listen();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info(`🚀 server run on port ${this.port}`);
    });
  }
}
