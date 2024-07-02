declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      readonly NODE_ENV: string;
      readonly HOST: string;
      readonly PORT: number;
      readonly ENC_SECRET: string;
      readonly JWT_SECRET: string;
      readonly JWT_REFRESH_SECRET: string;
      readonly JWT_EXPIRES: string;

      /** Database Hostname */
      readonly DB_HOST: string;
      /** Database Port */
      readonly DB_PORT: string;
      /** Database Username */
      readonly DB_USER: string;
      /** Database Password */
      readonly DB_PWD: string;
      /** Database name */
      readonly DB_NAME: string;

      readonly DISCORD_WEBHOOK: string;

      readonly NEW_RELIC_LICENSE_KEY: string;
      readonly NEW_RELIC_APP_NAME: string;

      readonly RABBIT_URL: string;
      readonly RABBIT_QUEUE: string;
    }
  }
}

export {};
