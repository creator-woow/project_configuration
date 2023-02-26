type TBuildMode = 'production' | 'development';

export interface IPaths {
    entry: string;
    output: string;
    indexHTML: string;
}

export interface IEnvOptions {
    mode: TBuildMode;
    port: number;
}

export interface IBuilderOptions {
    mode: TBuildMode;
    paths: IPaths;
    port?: number;
    isDev?: boolean;
}
