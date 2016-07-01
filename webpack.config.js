module.exports = {
  context: `${__dirname}/src`,
  entry: {
    nodelab: './index'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: 'nodelab',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  module: {
    loaders: [
      { text: /\.js$/, loader: 'babel' }
    ]
  },
  debug: true,
  devtool: '#source-map'
};
