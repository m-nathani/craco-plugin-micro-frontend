const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const { addPlugins, removePlugins, pluginByName } = require('@craco/craco');
const makeInjectable = require('./make-injectable');
const disableCSSExtraction = require('./disable-css-extraction');
const jestConfigOptions = require('./jest-config');
const webpackAlias = require('./webpack-alias');
const ignoreWarnings = require('./ignoreWarnings');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions, context }) => {
    // NOTE: remove the ignore warning once you have fixed all source-map-errors from packages
    // for more details: https://github.com/facebook/create-react-app/discussions/11767
    ignoreWarnings(webpackConfig);
    addPlugins(webpackConfig, [[new WebpackBar({ profile: true }), 'append']]);

    if (process.env.REACT_APP_INTERACTIVE_ANALYZE) {
      addPlugins(webpackConfig, [[new BundleAnalyzerPlugin(), 'append']]);
    }

    if (process.env.REACT_APP_INJECTABLE) {
      removePlugins(webpackConfig, pluginByName('HtmlWebpackPlugin'));
      removePlugins(webpackConfig, pluginByName('MiniCssExtractPlugin'));
      disableCSSExtraction(webpackConfig);
      makeInjectable({ webpackConfig, pluginOptions, context });
    }

    return webpackConfig;
  },
  overrideCracoConfig: ({ cracoConfig, context }) => {
    webpackAlias({ cracoConfig, context });
    return cracoConfig;
  },
  overrideJestConfig: ({ jestConfig, pluginOptions }) =>
    jestConfigOptions({ jestConfig, pluginOptions }),
};
