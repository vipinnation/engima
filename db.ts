import { Sequelize } from 'sequelize-typescript';
import User from './app/model/user.model';
import { config } from './config/config';
import Logger from './library/logger';
import { encryptPassword } from './library/password.process';


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
  await sequelize.sync({ alter: true })

  let user = await User.findOne({
    where: {
      email: "admin@admin.com"
    }
  })
  if (!user) {
    await User.create({
      email: "admin@admin.com",
      password: await encryptPassword("admin@231"),
      is_verified: true,
      full_name: "Admin"
    })
  }
}).catch((error: Error) => {
  Logger.error('Unable to connect to the database:', error);
});

export default sequelize;


