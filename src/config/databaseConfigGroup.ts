export interface DatabaseConfigGroupInterface {
  port: number;
  database: Database;
}

export interface Database {
  host: string;
  port: number;
}

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
