import * as dotenv from 'dotenv';

import { AppDataSource } from './database/db';
import { Server } from './server';

dotenv.config();

async function main() {
  try {
    const port = parseInt(process.env.PORT ?? '3000');
    new Server(port);
    await AppDataSource.initialize();
  } catch (err) {
    console.error(err);
  }
}

main();
