const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: "[name].[contenthash].[ext]",
                    //     },
                    // },
                    // {
                    //     loader: 'extract-loader', options: {
                    //         publicPath: "",
                    //     }
                    // },
                    // { loader: 'style-loader', },
                    { loader: 'css-loader', },
                ]
            }
        ]
    },
    devServer: {
        port: 8000
    }
};