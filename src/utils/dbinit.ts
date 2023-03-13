import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';
import { models } from '../models';

const {
  PG_HOST,
  PG_DATABASE,
  PG_USER,
  PG_PASSWORD,
} = process.env;

const URI = `postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}/${PG_DATABASE}`;

export const dbinit = () => {
  return new Sequelize(
    URI,
    {
      models,
      dialectOptions: {
        ssl: true,
      }
    }
  );
};
