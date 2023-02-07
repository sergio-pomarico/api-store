import { DataSource, DataSourceOptions } from 'typeorm';
import { BaseConfig } from './base.config';

export abstract class DatabaseConfig extends BaseConfig {
  constructor() {
    super();
    this.appDataSource = new DataSource(this.databaseConfig);
  }

  public appDataSource: DataSource;

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
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    };
  }
}
