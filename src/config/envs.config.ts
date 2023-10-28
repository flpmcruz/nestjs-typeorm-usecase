/* eslint-disable prettier/prettier */
export const EnvConfiguration = () => ({
  port: process.env.SERVER_PORT || 3000,
  postgres_pass: process.env.POSTGRES_PASS || '123456',
  postgres_db: process.env.POSTGRES_DB || 'MS_ACTIVITIES',
  postgres_user: process.env.POSTGRES_USER || 'postgres',
  postgres_host: process.env.POSTGRES_HOST || 'localhost',
  postgres_port: +process.env.POSTGRES_PORT || 5432,
  default_limit: process.env.DEFAULT_LIMIT || 10,
});
