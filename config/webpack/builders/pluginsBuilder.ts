import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuilderOptions } from '../types/Common';

export function pluginsBuilder({ paths, isDev }: IBuilderOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.indexHTML
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthas:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        }),
    ];
}
