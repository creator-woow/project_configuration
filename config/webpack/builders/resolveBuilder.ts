import webpack from 'webpack';
import { IBuilderOptions } from '../types/Common';

export function resolveBuilder({ paths }: IBuilderOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
