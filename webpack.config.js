var webpack = require('webpack');
var path = require('path');

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        path: path.join(__dirname, 'src/build'),
        publicPath: 'static',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpe?g|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(svg)$/i,
                loaders: [
                    'url-loader?mimetype=image/svg+xml'
                ]
            }
        ],
        noParse: [
            /shower\.min\.js/
        ]
    },
    plugins: [
        //new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            files: "src/*",
            server: {
                baseDir: ['src']
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.css', '.svg', '.png', '.jpg'],
        modulesDirectories: ['src', 'node_modules']
    }
};