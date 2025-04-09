import express, { Express, Request, Response } from 'express';
import rootRouter from './routes';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hola mundo con express'
  });
});

app.use(rootRouter);

export default app;
