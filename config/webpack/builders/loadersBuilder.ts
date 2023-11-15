import webpack from 'webpack';
import { IBuilderOptions } from '../types/Common';
import { buildStylesLoader } from '../loaders/styles';

export function loadersBuilder({ isDev }: IBuilderOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const stylesLoader = buildStylesLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpeg|jpg|woff|woff2)$/,
    type: 'asset/resource'
  };

  return [
    fileLoader,
    svgLoader,
    stylesLoader,
    typescriptLoader,
  ];
}
