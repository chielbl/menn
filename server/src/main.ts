import { env } from './env';
import mongoose from 'mongoose';
import { log } from './log';
import { createApp, shutdown } from './server';

export const fullPath = `http://${env.host}:${env.port}`;

/**
 * Initializes and starts the server, including creating the app instance,
 * connecting to the database, and setting up server shutdown handling.
 *
 * @async
 * @function start
 * @returns {Promise<void>} A promise that resolves when the server is started successfully.
 *
 * @throws {Error} If an error occurs during the server startup or database connection.
 */
(async function start() {
  // Create the application instance
  const app = await createApp();

  // Connect to the database
  await mongoose.connect(env.databaseUrl);
  log.info(`Connected to the database`);

  // Start the server and log the running information
  const server = app.listen(env.port, () => {
    log.info(`Server is running on ${fullPath}`);
  });
  // Handle server shutdown and cleanup
  shutdown(server, mongoose.connection);
})().catch((error) => log.error(error, 'Server failed to start'));
