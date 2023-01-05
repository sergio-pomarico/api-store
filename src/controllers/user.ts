import { Request, Response } from 'express';

export class UserController {
  getUser(__: Request, res: Response) {
    res.status(200).json({
      name: 'Sergio',
    });
  }
}
