module.exports = {
    entry: './src/index.js', //['babel-polyfill', './src/index.js'], // assumes your entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
        path: __dirname, // assumes your bundle.js will also be in the root of your project folder
        filename: './public/bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    watchOptions: {
        ignored: /node_modules/
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
            }
        ]
    }
}