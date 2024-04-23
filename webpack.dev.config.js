const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
require('dotenv').config();

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'development',
    plugins: [new ReactRefreshWebpackPlugin()],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: +process.env.DEV_SERVER_PORT,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: process.env.BACKEND_HOST,
                secure: false,
                changeOrigin: true,
            },
        },
    },
});
