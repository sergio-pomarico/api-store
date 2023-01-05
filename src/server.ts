import express, { Application, Router } from 'express';
import { ConfigServer } from './config/config';
import { UserRouter } from './routes/user';

export class Server extends ConfigServer {
  public app: Application = express();
  private port: number;

  constructor() {
    super();
    this.port = this.getPropertyAsNumber('PORT');
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use('/api/v1', this.routers());
    this.listen();
  }

  routers(): Router[] {
    return [new UserRouter().router];
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info(`🚀 server run on port ${this.port}`);
    });
  }
}
