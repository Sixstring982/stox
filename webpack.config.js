module.exports = {
  entry: './src/app.tsx',
  output: {
    filename: 'build/app.bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.tsx$/, loader: 'ts-loader' },
    ]
  }
}