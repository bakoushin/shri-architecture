module.exports = {
  output: {
    path: __dirname,
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    stats: 'errors-only',
    compress: true
  }
};
