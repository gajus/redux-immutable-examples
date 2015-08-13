var webpack = require('webpack'),
    devServer;

devServer = {
    contentBase: __dirname + '/src/endpoint',
    colors: true,
    quiet: false,
    noInfo: false,
    publicPath: '/static/',
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8000,
    hot: true
};

module.exports = {
    devtool: 'eval-source-map',
    debug: true,
    devServer: devServer,
    context: __dirname + '/src',
    entry: {
        app: [
            'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port,
            'webpack/hot/only-dev-server',

            './app'
        ]
    },
    output: {
        path: __dirname + '/src/endpoint/static',
        filename: '[name].js',
        publicPath: devServer.publicPath
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.OldWatchingPlugin(),
        // new webpack.NewWatchingPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                loader: 'react-hot'
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: [
            '',
            '.js'
        ]
    }
};
