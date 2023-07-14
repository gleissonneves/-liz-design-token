const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const buildPRD = true;

module.exports = {
  mode: buildPRD ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'liz-design-token.css', // Nome do arquivo CSS extraído
    }),
  ],
  optimization: {
    minimize: buildPRD, // Minificar o CSS apenas em produção
    minimizer: [
      new CssMinimizerPlugin(), // Plugin para minimizar o CSS
    ],
  },
};
