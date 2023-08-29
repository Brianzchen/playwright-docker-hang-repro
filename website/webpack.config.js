const path = require('path');
const webpack = require('webpack');

const {
  NODE_ENV, vr, headless,
} = process.env;

module.exports = ({
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  entry: './website/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: {
      index: 'index.html',
    },
    port: 3000,
    open: headless !== 'true',
    static: {
      directory: path.resolve(__dirname),
    },
  },
});
