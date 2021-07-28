var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    entry: {
      app: './src/index.js'
    },

    output: {
      path: path.join(__dirname, "/dist"),
      publicPath: "",
      filename: "main.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1239,
        writeToDisk: true,
        open: true,
      },
    mode: "development",
    module: {

        rules: [
  
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader",
                }
                ]
            },
          
  
       {
          test: /\.(sa|sc|c)ss$/,
        use: [
              {
                loader: MiniCssExtractPlugin.loader, 
                options: {
                  publicPath: '../' 
                }
              },
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [{
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images",
                esModule: false,
              },
            }]
  
          },
          {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
              use: [
                {
                  loader: "file-loader", 
                  options: {
                    name: '[name].[ext]',
                    outputPath: "fonts",
                    esModule: false,
                  }
                }
              ]
          },
        ]
},
plugins:[
    new HtmlWebpackPlugin({filename:"index.html",
    template:"./src/index.html",
    }),
    new HtmlWebpackPlugin({filename:"egypt.html",
    template:"./src/egypt.html",
    }),
    new HtmlWebpackPlugin({filename:"turkey.html",
    template:"./src/turkey.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
    }),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new OptimizeCssAssetsPlugin({}),
]

}