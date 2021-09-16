const path = require('path');
const base = require('./webpack.base.config');

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  ...base,
};
