const path = require('path');
const fs = require('fs');

const root = path.resolve(__dirname, 'src', 'scripts');
const entries = fs.readdirSync(root, 'utf8');
const entry = {
  script_loader: path.resolve(__dirname, 'src', 'index.ts'),
};

for (const x of entries) {
  const name = path.basename(x, '.ts');
  entry[name] = path.resolve(root, x);
}

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
