'use strict'

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//编译输出路径
module.exports = {
    debug: true,
    entry: './src/index',
    output: {
        path: __dirname + '/dist/',
        filename: 'build.js',
        publicPath: "/dist/",
        chunkFilename:"[id].build.js?[chunkhash]"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        },{
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel'
        }]
    },
    babel: {
        "presets": [
          ["es2015", {"loose": true, "spec": true}]
        ],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js'],
        //别名
        alias: {}
    },
    plugins: [],
    devtool: '#source-map'
};