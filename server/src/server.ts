import express, { type Express } from 'express';
import { log, security } from './shared';
import { Server } from 'http';
import type { Connection } from 'mongoose';

export const createServer = async (): Promise<Express> => {
  const server = express();

  // Middleware
  server.use(express.json());
  server.use(security);
  server.use((req, res, next) => {
    log.info(req.path, req.method);
    next();
  });

  // Routes
  server.get('/', (req, res) => {
    res.send('Hello, Express server!');
  });

  return server;
};

export const stopServer = (server: Server, databaseConnection: Connection) => {
  const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

  for (const signal of signals) {
    process.on(signal, () => {
      log.info(`${signal} signal received.`);
      server.close((error) => {
        if (error) log.error('Server close failed ', error);
        if (!error) log.info('Server closed.');
        if (databaseConnection) databaseConnection.close();
        process.exit(error ? 1 : 0);
      });
    });
  }
};
