import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nest',
  password: 'nest',
  database: 'ingredients',
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  synchronize: true,
};

// const sqliteConfig: SqliteConnectionOptions = {
//   type: 'sqlite',
//   database: 'ingredients',
//   // username: 'nest',
//   // password: 'nest',
//   entities: ['dist/src/**/*.entity{.ts,.js}'],
//   synchronize: true,
// };

export default pgConfig;
