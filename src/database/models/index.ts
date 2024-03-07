// AMBIENTE DE PRODUÇÃO
// import 'dotenv/config';
// import { Sequelize } from 'sequelize';
// import pg from 'pg';
// export default new Sequelize(process.env.POSTGRES_URL as string, {
//   dialectModule: pg,
// });


// AMBIENTE DE DESENVOLVIMENTO
import 'dotenv/config';
import config from '../config/database';
import { Sequelize } from 'sequelize';
export default new Sequelize(config);