
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const sourcePath = path.join(__dirname, './src')
const outPath = path.join(__dirname, './dist')
const publicPath = path.join(__dirname, './public')

module.exports = {
    context: sourcePath,
    entry: {
        'react-app': path.join(sourcePath, 'index.jsx')
    },
    output: {
        path: outPath,
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // https://github.com/Microsoft/TypeScript/issues/11677
        mainFields: ['main']
    },
    // externals: {
    //     'react' : 'React'
    // },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2015',
                                'react',
                                'flow'
                            ],
                            plugins: [
                                'transform-object-rest-spread',
                                'syntax-dynamic-import'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback: [{
                        loader: 'style-loader',
                    }],
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        }
                    ],
                }),
            },
            {
                test: /\.styl/,
                exclude: '/node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback: [{
                        loader: 'style-loader',
                    }],
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                        'stylus-loader'
                    ],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    }
}
