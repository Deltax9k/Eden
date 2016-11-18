const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: {
        index: __dirname + '/src/app.js'
    },
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].js'
    },
    plugins: [
        commonsPlugin,
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('[name].bundle.css')
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.html$/, loader: 'html' },
            { test: require.resolve('materialize-css'), loader: 'exports?Materialize' },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=[path][name].[ext]'
            },
            //{ test: /\.js$/, loader: 'babel' },
        ]
    },
    resolve: {
        root: __dirname,
        extensions: [ '', '.js' ]
    }
}