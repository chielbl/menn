import mongoose from 'mongoose';
import { log } from './shared/log';
import createApp, { shutdown } from './server';
import { env, logEnvAppInfo } from './shared';

export const fullPath = `http://${env.HOST}:${env.PORT}`;

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
  logEnvAppInfo();
  // Create the application instance
  const app = await createApp();

  // Connect to the database
  await mongoose.connect(env.DATABASE_URL);
  log.info(`Connected to the database`);

  // Start the server and log the running information
  const server = app.listen(env.PORT, () => {
    log.info(`Server is running on ${fullPath}`);
  });
  // Handle server shutdown and cleanup
  shutdown(server, mongoose.connection);
})().catch((error) => log.error(error, 'Server failed to start'));
