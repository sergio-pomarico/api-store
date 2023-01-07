import * as dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';

export abstract class ConfigServer {
  constructor() {
    dotenv.config();
  }

  public getEnvProperty(key: string) {
    return process.env[key];
  }

  public getEnvPropertyAsNumber(key: string): number {
    return Number(this.getEnvProperty(key));
  }

  public get databaseConfig(): DataSourceOptions {
    return {
      type: 'postgres',
      host: 'database',
      port: this.getEnvPropertyAsNumber('DB_PORT'),
      username: this.getEnvProperty('DB_USER'),
      password: this.getEnvProperty('DB_PASSWORD'),
      database: this.getEnvProperty('DB_NAME'),
      synchronize: true,
      logging: true,
    };
  }
}
