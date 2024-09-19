import allConfig from './environment/all.environment.json';
import localConfig from './environment/local.environment.json';
import stagingConfig from './environment/staging.environment.json';
import productionConfig from './environment/production.environment.json';

const env = process.env.REACT_APP_ENV || 'local';

let envConfig = {};

switch (env) {
  case 'local':
    envConfig = localConfig;
    break;
  case 'staging':
    envConfig = stagingConfig;
    break;
  case 'production':
    envConfig = productionConfig;
    break;
  default:
    throw new Error(`Unknown environment: ${env}`);
}

// Merge the common settings with the environment-specific settings
const config = {
  ...allConfig,
  ...envConfig
};

export default config;
