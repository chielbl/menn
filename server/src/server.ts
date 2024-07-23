import express, { type Express } from 'express';
import { Server } from 'http';
import type { Connection } from 'mongoose';
import { log } from './log';
import { security } from './middleware';

export const createApp = async (): Promise<Express> => {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(security);
  app.use((req, res, next) => {
    log.info({ path: req.path, method: req.method });
    next();
  });

  // Routes
  app.get('/', (req, res) => {
    res.send('Hello, Express app!');
  });

  return app;
};

export const stopServer = (server: Server, databaseConnection: Connection) => {
  const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

  for (const signal of signals) {
    process.on(signal, () => {
      log.info(`${signal} signal received.`);
      server.close((error) => {
        if (error) log.error('Server close failed ', error);
        if (!error) log.info('Server closed.');
        databaseConnection.close();
        process.exit(error ? 1 : 0);
      });
    });
  }
};
