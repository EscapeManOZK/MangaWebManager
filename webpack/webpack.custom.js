const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const { hashElement } = require('folder-hash');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackNotifierPlugin = require('webpack-notifier');
const ESLintPlugin = require('eslint-webpack-plugin');

const environment = require('./environment');


module.exports = async (config, options, targetOptions) => {
  const languagesHash = await hashElement(path.resolve(__dirname, '../src/assets/i18n'), {
    algo: 'md5',
    encoding: 'hex',
    files: { include: ['*.json'] },
  });


  if (config.mode === 'production') {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        // Webpack statistics in target folder
        reportFilename: '../stats.html',
      })
    );
  }


  // PLUGINS
  if (config.mode === 'development') {
    config.plugins.push(
       new ESLintPlugin({
        baseConfig: {
          parserOptions: {
            project: ['../tsconfig.app.json'],
          },
        },
      }),
      new WebpackNotifierPlugin({
        title: 'MWA Manager Application',
        contentImage: path.join(__dirname, 'logo-jhipster.png'),
      })
    );
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      I18N_HASH: JSON.stringify(languagesHash.hash),
      __DEBUG_INFO_ENABLED__: environment.__DEBUG_INFO_ENABLED__ || config.mode === 'development',
      SERVER_API_URL: JSON.stringify(environment.SERVER_API_URL),
    }),
    new MergeJsonWebpackPlugin({
      output: {
        groupBy: [
          { pattern: './src/assets/i18n/en/*.json', fileName: './i18n/en.json' },
          { pattern: './src/assets/i18n/fr/*.json', fileName: './i18n/fr.json' }
        ],
      },
    })
  );

  config = merge(
    config
  );

  return config;
};
