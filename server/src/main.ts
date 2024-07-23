import { connectDatabase } from './db';
import { log } from './log';
import { createApp, stopServer } from './server';

(async function startServer() {
  const port = process.env.PORT || '8000';
  const host = process.env.HOST || 'localhost';

  const app = await createApp();
  const databaseConnection = await connectDatabase();

  const server = app.listen(port, () => {
    log.info(`Server is running on http://${host}:${port}`);
  });

  stopServer(server, databaseConnection);
})().catch((error) => log.error(error, 'Server failed to start'));
