import * as dotenv from 'dotenv';

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
}
