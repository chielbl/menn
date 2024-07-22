import { createServer } from "./server";
import mongoose from "mongoose";

const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL || "";

async function main() {
  const server = await createServer();

  mongoose
    .connect(databaseUrl)
    .then(() => {
      server.listen(port, () => {
        console.info(`ℹ️  Server is running on port ${port}`);
      });
    })
    .catch((err) => {
      console.error("❌ failed to connect to the database!", err);
    });
}

main().catch((err) => {
  console.error("❌ Server failed to start ", err);
});
