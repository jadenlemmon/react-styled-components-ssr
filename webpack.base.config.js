const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // react: path.resolve('./node_modules/react'),
      // 'react-dom': path.resolve('./node_modules/react-dom'),
      // 'react-helmet': path.resolve('./node_modules/react-helmet'),
      // 'styled-components': path.resolve('./node_modules/styled-components'),
      // 'styled-normalize': path.resolve('./node_modules/styled-normalize'),
      // 'styled-system': path.resolve('./node_modules/styled-system'),
      // 'react-is': path.resolve('./node_modules/react-is'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
