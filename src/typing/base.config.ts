import * as dotenv from 'dotenv';

export abstract class BaseConfig {
  constructor() {
    dotenv.config();
  }

  public getEnvProperty(key: string) {
    return process.env[key];
  }

  public getEnvPropertyAsNumber(key: string): number {
    return Number(this.getEnvProperty(key));
  }
}
