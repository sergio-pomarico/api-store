import express, { Application, Router } from 'express';
import { DataSource } from 'typeorm';
import { ConfigServer } from './config/config';
import { UserRouter } from './routes/user';

export class Server extends ConfigServer {
  public app: Application = express();
  private port: number;

  constructor() {
    super();
    this.port = this.getEnvPropertyAsNumber('PORT');
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.connect();
    this.app.use('/api/v1', this.routers());
    this.listen();
  }

  routers(): Router[] {
    return [new UserRouter().router];
  }

  async connect(): Promise<void> {
    try {
      const AppDataSource: DataSource = new DataSource(this.databaseConfig);
      await AppDataSource.initialize();
    } catch (error) {
      console.error(error);
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info(`🚀 server run on port ${this.port}`);
    });
  }
}

new Server();
