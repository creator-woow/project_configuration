import webpack from 'webpack';

export function resolveBuilder(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}
