
module.exports = {
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/public'
    }
};