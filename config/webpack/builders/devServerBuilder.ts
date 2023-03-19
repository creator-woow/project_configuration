import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { IBuilderOptions } from '../types/Common';

export function devServerBuilder({ port = 9000 }: IBuilderOptions): DevServerConfig {
    return {
        port,
        open: true,
        hot: true,
        client: {
            overlay: true,
            progress: true
        },
        historyApiFallback: true
    };
}
