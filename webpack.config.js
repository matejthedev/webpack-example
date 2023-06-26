const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      // open: true,
      // hot: true,
      // compress: true,
      // historyApiFallback: true,
    },
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
      title: 'Webpack Demo'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  }
};