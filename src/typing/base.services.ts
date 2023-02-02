import { EntityTarget, Repository } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ConfigServer } from './config.server';

export class BaseServices<T extends BaseEntity> extends ConfigServer {
  public execRepository: Promise<Repository<T>>;
  constructor(private getEntity: EntityTarget<T>) {
    super();
    this.execRepository = this.initRepository(this.getEntity);
  }

  async initRepository<T extends BaseEntity>(
    entity: EntityTarget<T>,
  ): Promise<Repository<T>> {
    const connetion = this.appDataSource.getRepository(entity);
    return connetion;
  }
}
