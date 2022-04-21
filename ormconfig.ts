import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nest',
  password: 'nest',
  database: 'ingredients',
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  synchronize: true,
  uuidExtension: 'pgcrypto',
};

export default pgConfig;
