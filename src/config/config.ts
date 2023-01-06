import * as dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';

export abstract class ConfigServer {
  constructor() {
    dotenv.config();
  }

  public getEnvironmetProperty(key: string) {
    return process.env[key];
  }

  public getPropertyAsNumber(key: string): number {
    return Number(this.getEnvironmetProperty(key));
  }

  public get env(): string {
    return this.getEnvironmetProperty('NODE_ENV')?.trim() ?? 'development';
  }

  public get databaseConfig(): DataSourceOptions {
    return {
      type: 'postgres',
      host: 'database',
      port: this.getPropertyAsNumber('DB_PORT'),
      username: this.getEnvironmetProperty('DB_USER'),
      password: this.getEnvironmetProperty('DB_PASSWORD'),
      database: this.getEnvironmetProperty('DB_NAME'),
      synchronize: true,
      logging: true,
    };
  }
}
