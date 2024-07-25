import express, { type Express } from 'express';
import { Server } from 'http';
import type { Connection } from 'mongoose';
import { log } from './log';
import { logs, security } from './middleware';
import { productRouter } from './routes';

/**
 * Creates and configures an Express application.
 *
 * @returns {Promise<Express>} A promise that resolves to an instance of Express.
 */
export const createApp = async (): Promise<Express> => {
  // Initialize the Express application
  const app = express();
  // Middlewares
  app.use(express.json());
  app.use(security);
  app.use(logs);

  // Routes
  app.get('/', (req, res) => {
    res.send('Hello, Express app!');
  });
  app.use('/api/products', productRouter);

  // Return the configured Express app instance
  return app;
};

/**
 * Sets up handlers to gracefully shut down the server and close the database connection
 * upon receiving termination signals.
 *
 * @param {Server} server - The HTTP server instance to be closed.
 * @param {Connection} databaseConnection - The database connection to be closed.
 */
export const shutdown = (server: Server, databaseConnection: Connection) => {
  // List of signals to listen for
  const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

  for (const signal of signals) {
    process.on(signal, () => {
      log.info(`${signal} signal received.`);

      // Close the server and handle potential errors
      server.close((error) => {
        if (error) log.error('Server close failed ', error);
        if (!error) log.info('Server closed.');

        // Close the database connection
        databaseConnection.close();

        // Exit the process with the appropriate status code
        process.exit(error ? 1 : 0);
      });
    });
  }
};
