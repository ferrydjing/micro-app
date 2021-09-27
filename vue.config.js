/* eslint-disable @typescript-eslint/no-var-requires */
const swConfig = require('./build/sw-precache');
const { GenerateSW } = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { name } = require('./package');

const resolve = (dir) => {
    return path.join(__dirname, dir);
};
module.exports = {
    publicPath: '/micro-app/',
    lintOnSave: true,
    assetsDir: './static',
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'micro app';
            return args;
        });

        config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components'));
        config.output
            .jsonpFunction(`webpackJsonp_${name}`)
            .library(`${name}-[name]`)
            .libraryTarget('umd');
    },
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    configureWebpack:
        process.env.NODE_ENV === 'production'
            ? {
                  optimization: {
                      minimizer: [
                          new TerserPlugin({
                              cache: true,
                              parallel: true,
                              terserOptions: {
                                  compress: {
                                      drop_console: true,
                                      drop_debugger: true
                                  }
                              }
                          })
                      ]
                  },
                  plugins: [new GenerateSW(swConfig)]
              }
            : {
                  plugins: [new GenerateSW(swConfig)]
              },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
};
