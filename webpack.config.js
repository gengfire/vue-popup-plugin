'use strict'

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//编译输出路径
module.exports = {
    debug: true,
    entry: './src/index',
    output: {
        path: __dirname + "/dist/",
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel-loader',
            query: {
              presets: [ 'es2015' ]
            }
        }]
    },
    babel: {
        presets: [
            ["es2015", {
                "loose": true,
                "spec": true,
                // "modules": false
            }]
        ],
        plugins: ['transform-runtime']
    },
    resolve: {
        extension: ['', '.js'],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
};
