const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const developmentConfiguration = function () {
    return {
        devtool: 'source-map'
    };
}

module.exports = merge.smart(baseConfig, developmentConfiguration());