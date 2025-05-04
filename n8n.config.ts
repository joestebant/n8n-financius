// n8n.config.ts

import type { UserSettingsConfig } from 'n8n-core';

export const config: UserSettingsConfig = {
  database: {
    type: 'postgresdb',
    postgresdb: {
      host: 'dpg-d0bcno9r0fns73dbb390-a',
      port: 5432,
      database: 'n8n',
      user: 'n8n_user',
      password: 'iSmBtp32g3yz0bMSsy8Ftd9zmhcb9hER',
      ssl: true,
    },
  },
  generic: {
    timezone: 'America/Santiago',
  },
};
