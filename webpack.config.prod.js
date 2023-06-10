const path = require("path");

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        },
      },
    ],
  },
// prefer globally installed packages over local ones
  resolve: {
      extensions: ['.*', '.js', '.jsx'],
      modules: ['/home/erick/.nvm/versions/node/v18.16.0/lib/node_modules', 'node_modules'],
  },
  resolveLoader: {
      modules: ['/home/erick/.nvm/versions/node/v18.16.0/lib/node_modules', 'node_modules'],
  }
};
