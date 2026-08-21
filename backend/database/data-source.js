import 'dotenv/config';
import { DataSource } from 'typeorm';
import { SkillSchema } from './entities/Skill.js';
import { CoacheSchema } from './entities/Coache.js';
import { CreditPackageSchema } from './entities/CreditPackage.js';

const appDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE,
  enableSsl: process.env.DB_ENABLE_SSL,
  entities: [SkillSchema, CoacheSchema, CreditPackageSchema],
  migrations: [],
});

export { appDataSource };
