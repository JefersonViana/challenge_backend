// AMBIENTE DE DESENVOLVIMENTO
import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: 'password',
  database: 'store',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

export = config;