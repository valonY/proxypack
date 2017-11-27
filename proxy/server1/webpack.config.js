var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlplugin = require('html-webpack-plugin');
var path = require('path');
var pages = require('./pages');
var pagedir = path.resolve(__dirname, './src/page');
var borndir = path.resolve(__dirname, './www');
var pageplugins = [];
var config = {
    devtool: "eval-source-map",
    entry: {},
    output: {
        path: borndir,
        // publicPath: './build',
        filename: '[name]/[name].js',
        chunkFilename: '[id].born.js'
    },
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    resolve: {
        alias: {
            Common: './src/common',
            Component: './src/components',
            Style: './src/pbstyle'
        }
    },
    externals: {
        jquery: "jQuery",
        $: "$",
        $: "jQuery"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: [
                        {
                            loader: 'css',
                            options: {
                                modules: true,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: ['css', 'sass']
                })
            },
            {
                test: /\.html$/,
                use: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                options: {
                    limit: 10000
                }
            },
        ]
    },
    plugins: []
}
pages.forEach(function (spa) {
    config.entry[spa] = path.resolve(pagedir, spa);
    var temppage = new htmlplugin({
        template: pagedir + '/index.html',
        title: 'page was born',
        filename: spa + '/'+ spa +'.html',
        chunks: [spa, 'commons'],
        xhtml: true,
        hash: true
    });
    pageplugins.push(temppage);
});
pageplugins.push(new ExtractTextPlugin('[name]/[name].css'));
config.plugins = pageplugins;
module.exports = config;