import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';
import Logger from './library/logger';


let { SQL_DB, SQL_PASSWORD, SQL_URI, SQL_USERNAME } = config.sql

console.log(config.sql)


const sequelize = new Sequelize({
  database: SQL_DB,
  username: SQL_USERNAME,
  password: SQL_PASSWORD,
  host: SQL_URI,
  dialect: 'mysql',
  models: [__dirname + '/app/models'],
});

sequelize.authenticate().then(async (result: any) => {
  Logger.success('Database connected successfully to host:', SQL_URI);
  await sequelize.sync()
}).catch((error: Error) => {
  Logger.error('Unable to connect to the database:', error);
});

export default sequelize;


