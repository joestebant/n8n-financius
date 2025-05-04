// n8n.config.ts

import type { UserSettingsConfig } from 'n8n-core';

export const config = {
  database: {
    type: process.env.DB_TYPE,
    postgresdb: {
      host: process.env.DB_POSTGRESDB_HOST,
      port: Number(process.env.DB_POSTGRESDB_PORT),
      database: process.env.DB_POSTGRESDB_DATABASE,
      user: process.env.DB_POSTGRESDB_USER,
      password: process.env.DB_POSTGRESDB_PASSWORD,
      ssl: process.env.DB_POSTGRESDB_SSL === 'true',
    },
  },
  generic: {
    timezone: 'America/Santiago',
  },
};
