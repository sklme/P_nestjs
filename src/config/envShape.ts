export interface DatabaseConfigGroupInterface {
  port: number;
  database: Database;
}

export interface Database {
  host: string;
  port: number;
}

type MapEnvType<Type, Prefix extends string> = {
  [P in keyof Type as `${Prefix}.${P & string}`]: Type[P];
};

type DatabaseWithPrefix = MapEnvType<Database, 'database'>;

export interface EnvVars extends DatabaseWithPrefix {
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_HOST: string;
  BEE_EXT_TOKEN: string;
  GITHUB_TOKEN: string;
  PORT: number;
  DATABASE_PORT: number;
  database: Database;
  // 'database.host': string;
  // 'database.port': number;
}
