import { Server } from './server';

async function main() {
  try {
    new Server();
  } catch (err) {
    console.error(err);
  }
}

main();
