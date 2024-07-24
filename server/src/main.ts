import mongoose from 'mongoose';
import { log } from './log';
import { createApp, shutdown } from './server';

// Fetch variables from environment or set with default values
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8000';
const databaseUrl = process.env.DATABASE_URL || '';
export const fullPath = `http://${host}:${port}`;

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
  log.info(process.pid);

  // Connect to the database
  await mongoose.connect(databaseUrl);
  log.info(`Connected to the database`);

  // Start the server and log the running information
  const server = app.listen(port, () => {
    log.info(`Server is running on ${fullPath}`);
  });
  // Handle server shutdown and cleanup
  shutdown(server, mongoose.connection);
})().catch((error) => log.error(error, 'Server failed to start'));
