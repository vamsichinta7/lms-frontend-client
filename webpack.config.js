const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust according to your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/@firebase\/auth/,
        ],
      },
    ],
  },
  ignoreWarnings: [
    {
      module: /@firebase\/auth/,
    },
  ],
};
