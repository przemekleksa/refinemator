const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loaders: [
              'style-loader',
              'css-loader?sourceMap',
              'sass-loader?{"sourceMap":true,"includePaths":["app/styles"]}',
            ],
          },
        ],
      },
      // other rules...
    ],
  },
};
