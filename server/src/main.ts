import { createServer, stopServer } from './server';
import { connectDatabase } from './shared';

(async function startServer() {
  const port = process.env.PORT || '8000';
  const server = await createServer();

  try {
    const databaseConnection = await connectDatabase();

    if (!databaseConnection) throw new Error('No database connection!');

    const s = server.listen(port, () => {
      console.info(`ℹ️  Server is running on port ${port}`);
    });

    stopServer(s, databaseConnection);
  } catch (error) {
    throw error;
  }
})().catch((error) => console.error('❌ Server failed to start', error));
