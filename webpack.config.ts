import path from 'path';
import { configBuilder, IPaths, IEnvOptions } from './config/webpack';

const paths: IPaths = {
  src: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: path.resolve(__dirname, 'build'),
  indexHTML: path.resolve(__dirname, 'public', 'index.html')
};

module.exports = (env: IEnvOptions) => {
  const mode = env.mode || 'development';
  return configBuilder({
    mode,
    paths,
    port: env.port || 3000,
    isDev: mode === 'development'
  });
};
