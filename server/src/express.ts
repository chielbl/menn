import express, { type Express } from 'express';
import { security } from './shared';

export const createExpressApp = async (): Promise<Express> => {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(security);
  app.use((req, res, next) => {
    console.info(req.path, req.method);
    next();
  });

  // Routes
  app.get('/', (req, res) => {
    res.send('Hello, Express server!');
  });

  return app;
};
