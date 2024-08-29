//Is a package for Express.js that simplifies error handling for asynchronous routes and middleware
import 'express-async-errors';
import express, { type Express } from 'express';
import { errorHandler, logHandler, security } from './middlewares';
import { serve, setup } from 'swagger-ui-express';
import document from '@repo/contract/doc.json';
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
  app.use(logHandler);
  app.use(express.json());
  app.use(security);

  // Swagger / OpenAPI
  app.get('/api-docs/doc.json', (_req, res) => res.json(document));
  app.use('/api-docs/', serve, setup(document));

  // Routes
  app.get('/', (_req, res) => {
    res.send('Hello, Express app!');
  });
  app.use('/api/products', productRouter);

  // Error handling middleware convert thrown errors to HTTP responses
  app.use(errorHandler);

  // Return the configured Express app instance
  return app;
};
