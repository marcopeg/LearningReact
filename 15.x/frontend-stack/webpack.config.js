
const path = require('path')
const webpack = require('webpack')

const sourcePath = path.join(__dirname, './src')
const outPath = path.join(__dirname, './dist')
const publicPath = path.join(__dirname, './public')

module.exports = {
    context: sourcePath,
    devtool: 'source-map',
    entry: {
        main: path.join(sourcePath, 'index.jsx')
    },
    output: {
        path: outPath,
        publicPath: '/',
        filename: 'react-app.js'
    },
    devServer: {
        contentBase: publicPath,
        hot: true,
        stats: {
          warnings: false
        },
        historyApiFallback: {
			disableDotRule: true
		}
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // https://github.com/Microsoft/TypeScript/issues/11677
        mainFields: ['main']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'react-hot-loader',
                    'babel-loader'
                ]
            }
        ]
    },
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    }
}
