const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [{
                    loader: 'style-loader'
                }, 
                { loader: MiniCssExtractPlugin.loader
                },
                     'css-loader',
                 
                {
                      loader: 'sass-loader'
                }]
          })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
         use: [
                {
                loader: 'file-loader'
                }
            ]
        }
    ]
  },
  plugins: [ 
    new ExtractTextPlugin({filename: './css/app.css'}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'main.css',
    }),
  ],
  devServer: {
    overlay: true
  }
}