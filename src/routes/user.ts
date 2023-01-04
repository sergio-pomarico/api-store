import { BaseRouter } from './router';
import { UserController } from '../controllers/user';

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }
  routes(): void {
    this.router.get('/user', this.controller.getUser);
  }
}
