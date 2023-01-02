import * as dotenv from 'dotenv';

import { AppDataSource } from './database/db';
import app from './app';

dotenv.config();

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(process.env.PORT, () =>
      console.info(`🚀 server run on port ${process.env.PORT}`),
    );
  } catch (err) {
    console.error(err);
  }
}

main();
