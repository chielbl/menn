import { createServer } from './server';
import mongoose from 'mongoose';

const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL || '';

async function main() {
  const server = await createServer();

  mongoose
    .connect(databaseUrl)
    .then(() => {
      const s = server.listen(port, () => {
        console.info(`ℹ️  Server is running on port ${port}`);
      });

      // handle correct shutdown
      const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];

      for (const signal of signals) {
        process.on(signal, () => {
          console.info(`ℹ️  ${signal} signal received.`);
          s.close((err) => {
            if (err) console.error('❌ server close failed ', err);
            console.error('ℹ️  server closed.');
            process.exit(err ? 1 : 0);
          });
        });
      }
    })
    .catch((err) => {
      console.error('❌ failed to connect to the database!', err);
    });
}

main().catch((err) => {
  console.error('❌ Server failed to start ', err);
});
