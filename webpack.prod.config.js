var path = require('path');
var webpack = require('webpack');
var WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
    entry: './src/main.js',
    mode: 'production',
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
                AutoIncreaseVersion: true,
                InjectAsComment: false
            }
        })
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'tcfs.min.js'
    },
};