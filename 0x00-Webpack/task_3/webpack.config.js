const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './task_3/modules/header/header.js',
    body: './task_3/modules/body/body.js',
    footer: './task_3/modules/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[ext]',
        },
        include: [path.resolve(__dirname, 'task_3/assets')],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './task_3/index.html',
      filename: 'index.html',
      title: 'Holberton Dashboard',
    }),
  ],
  devServer: {
    port: 8564,
  },
  devtool: 'inline-source-map',
};
