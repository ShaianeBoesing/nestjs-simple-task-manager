import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TasksMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware log: Antes da requisição relacionada a tarefas');
    next();
    console.log('Middleware log: Depois da requisição relacionada a tarefas');
  }
}
