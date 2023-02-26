import webpack from 'webpack';
import { pluginsBuilder } from './pluginsBuilder';
import { loadersBuilder } from './loadersBuilder';
import { resolveBuilder } from './resolveBuilder';
import { devServerBuilder } from './devServerBuilder';
import { IBuilderOptions } from '../types/Common';

const configBuilder = (options: IBuilderOptions): webpack.Configuration => {
    const { mode, paths, isDev } = options;
    return {
        mode: mode,
        entry: paths.entry,
        devtool: isDev ? 'inline-source-map' : undefined,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        module: {
            rules: loadersBuilder(options),
        },
        resolve: resolveBuilder(),
        plugins: pluginsBuilder(options),
        devServer: isDev ? devServerBuilder(options) : undefined
    };
};

export { configBuilder };
