import { log } from './shared/log';
import { createApp } from './app';
import { env, logEnvAppInfo } from './shared';
import { mongo } from './db';

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
  mongo('connect');

  // Start the server and log the running information
  const server = app.listen(env.PORT, () => {
    log.info(`Server is running on ${fullPath}`);
  });

  // Handle server shutdown and cleanup
  const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT']; // List of signals to listen for

  for (const signal of signals) {
    process.on(signal, () => {
      log.info(`${signal} signal received.`);

      // Close the server and handle potential errors
      server.close((error) => {
        if (error) log.error('Server close failed ', error);
        if (!error) log.info('Server closed.');

        // Close the database connection
        mongo('disconnect');

        // Exit the process with the appropriate status code
        process.exit(error ? 1 : 0);
      });
    });
  }
})().catch((error) => log.error(error, 'Server failed to start'));
