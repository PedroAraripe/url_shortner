import { AppDataSource } from "../data-source";

const connectDatabase = async () => {
  console.time('Starting connection to database');
  await AppDataSource.initialize();
};

connectDatabase().catch(err => {
  console.error(err);
  process.exit(1);
});
