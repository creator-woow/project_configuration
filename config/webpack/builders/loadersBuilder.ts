import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuilderOptions } from '../types/Common';

export function loadersBuilder({ isDev }: IBuilderOptions): webpack.RuleSetRule[] {
    const typescript = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const styles = {
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

    return [
        styles,
        typescript,
    ];
}
