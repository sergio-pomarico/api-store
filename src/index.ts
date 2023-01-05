import { AppDataSource } from './database/db';
import { Server } from './server';

async function main() {
  try {
    new Server();
    await AppDataSource.initialize();
  } catch (err) {
    console.error(err);
  }
}

main();
