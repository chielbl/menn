import express, { type Express } from 'express';
import { security } from './shared';
import { Server } from 'http';
import type { Connection, Mongoose } from 'mongoose';

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

export const stopServer = (server: Server, databaseConnection: Connection) => {
  const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

  for (const signal of signals) {
    process.on(signal, () => {
      console.info(`ℹ️  ${signal} signal received.`);
      server.close((error) => {
        if (error) console.error('❌ server close failed ', error);
        if (!error) console.info('ℹ️  server closed.');
        if (databaseConnection) databaseConnection.close();
        process.exit(error ? 1 : 0);
      });
    });
  }
};
