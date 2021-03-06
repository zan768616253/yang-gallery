const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '..', 'app/src/index.js'),
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin('style.css')
    ]
}