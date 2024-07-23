import express, { type Express } from 'express';
import { security } from './shared';

export const createServer = async (): Promise<Express> => {
  const server = express();

  // Middleware
  server.use(express.json());
  server.use(security);
  server.use((req, res, next) => {
    console.info(req.path, req.method);
    next();
  });

  // Routes
  server.get('/', (req, res) => {
    res.send('Hello, Express server!');
  });

  return server;
};
