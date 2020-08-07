const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
	  main: './src/index.js',

	  styles:'./src/assets/css/style.css'
	  
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
	    {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use:[{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }]
       },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', 
	            options: { 
		        importLoaders: 1,
                outputPath: 'assets/css/' 
                } 
              },
            'postcss-loader',
          ],
        }),
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use:[{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/'
            }
          }]
       }
     ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
	    filename: 'index.html',
      template: 'src/index.html'
    }),
     new HtmlWebpackPlugin({
        filename: 'events.html',
        template: 'src/events.html'
     }),
     new HtmlWebpackPlugin({
        filename: 'recipe-page.html',
        template: 'src/recipe-page.html'
     }),
     new HtmlWebpackPlugin({
        filename: 'recipe-search.html',
        template: 'src/recipe-search.html'
     }),
     new HtmlWebpackPlugin({
        filename: 'board-of-directors-index.html',
        template: 'src/board-of-directors-index.html'
     }),
     new HtmlWebpackPlugin({
        filename: 'board-of-directors-page.html',
        template: 'src/board-of-directors-page.html'
     }),
  ],
  output: {
	  filename:'[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
	  watchContentBase: true,
    contentBase: path.join(__dirname, 'docs') // Get it to serve from somewhere other than right here.
  }
}
