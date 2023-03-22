import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuilderOptions } from '../types/Common';

export function loadersBuilder({ isDev }: IBuilderOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const stylesLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module.scss/,
            localIdentName: isDev ? '[path][name]-[local]-[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader',
    ],
  };

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
