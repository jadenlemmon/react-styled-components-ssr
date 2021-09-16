const path = require('path');
const base = require('./webpack.base.config');

module.exports = {
  target: 'node',
  entry: './src/ServerApp.js',
  externals: ['react-helmet', 'styled-components'],
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, './build'),
    libraryTarget: 'commonjs2',
  },
  ...base,
};
