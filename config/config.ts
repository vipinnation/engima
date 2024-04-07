import dotenv from 'dotenv';

dotenv.config();


const SQL_DB = process.env.SQL_DB || ""
const SQL_PASSWORD = process.env.SQL_PASSWORD || ""
const SQL_URI = process.env.SQL_URI || ""
const SQL_USERNAME = process.env.SQL_USERNAME || ""

const REDIS_URL = process.env.REDIS_URL || ""

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '';

const MAIL_EMAIL = process.env.MAIL_EMAIL || '';
const MAIL_PASSWORD = process.env.MAIL_PASSWORD || '';
const MAIL_SERVICE = process.env.MAIL_SERVICE || '';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || '';


const HASH_STRING = process.env.HASH_STRING || '';




export const config = {
  REDIS_URL,
  sql: {
    SQL_DB, SQL_PASSWORD, SQL_URI, SQL_USERNAME
  },
  jwt: {
    JWT_EXPIRE,
    JWT_SECRET
  },
  mail: {
    email: MAIL_EMAIL,
    password: MAIL_PASSWORD,
    service: MAIL_SERVICE,
    adminEmail: ADMIN_EMAIL
  },
  hash: {
    HASH_STRING
  },
};
