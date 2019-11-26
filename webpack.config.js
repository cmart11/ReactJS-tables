module.exports = {
    entry: ['babel-polyfill', './src/index.js'], // assumes our entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
        path: __dirname, // assumes your bundle.js will also be in the root of your project folder
        filename: './public/bundle.js'
    },
    watchOptions: {
        ignored: /node_modules/
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './public',
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'source-maps',
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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
}