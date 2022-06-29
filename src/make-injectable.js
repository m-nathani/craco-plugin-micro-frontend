const path = require('path');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');

module.exports = ({
  webpackConfig,
  pluginOptions: {
    orgName,
    fileName,
    entry = 'src/index.injectable.js',
    orgPackagesAsExternal = false,
    reactPackagesAsExternal = true,
    externals: userExternals = [],
    minimize = false,
    libraryTarget = 'umd',
    outputPath = 'dist',
  },
  context: { paths },
}) => {
  if (typeof orgName !== 'string') {
    throw Error('craco-plugin requires an orgName string');
  }

  if (typeof fileName !== 'string') {
    throw Error('craco-plugin requires an opts.projectName string');
  }

  webpackConfig.entry = path.resolve(entry);

  // eslint-disable-next-line no-multi-assign
  webpackConfig.output.path = paths.appBuild = path.resolve(outputPath);
  webpackConfig.output.filename = `${fileName}.js`;
  webpackConfig.output.libraryTarget = libraryTarget;
  webpackConfig.output.devtoolNamespace = fileName;
  webpackConfig.output.publicPath = '';

  webpackConfig.optimization.minimize = minimize;
  webpackConfig.optimization.minimizer = [
    ...webpackConfig.optimization.minimizer,
    new HtmlMinimizerPlugin(),
  ];
  webpackConfig.optimization.runtimeChunk = false;

  webpackConfig.optimization.splitChunks = {
    cacheGroups: { default: false },
  };

  let externals = [...userExternals];
  if (reactPackagesAsExternal) externals = [...externals, 'react', 'react-dom'];
  if (orgPackagesAsExternal) externals = [...externals, new RegExp(`^@${orgName}/`)];

  webpackConfig.externals = externals;
};
