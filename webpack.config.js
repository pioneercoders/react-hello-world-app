var webpack = require('webpack');
var path = require('path');

var config = {
   entry:'./main.js',
	
   output: {
      filename: 'bundle.js',    
   },
	
   devServer: {
      inline: true,
      port: 3000
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;