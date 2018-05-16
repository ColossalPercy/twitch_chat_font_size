var path = require('path');
var webpack = require('webpack');
var WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }]
    },

    plugins: [
        new WebpackAutoInject({
            components: {
                AutoIncreaseVersion: false,
                InjectAsComment: false
            }
        })
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build',
        filename: 'tcfs.dev.js'
    },
    watch: true,
    devServer: {
        contentBase: './',
        inline: true,
        port: 3000
    }
};