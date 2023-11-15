import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildStylesLoader(isDev: boolean) {
  return {
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
}
