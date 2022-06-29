module.exports = (webpackConfig) => {
  if (!webpackConfig.ignoreWarnings) webpackConfig.ignoreWarnings = [];

  webpackConfig.ignoreWarnings = [
    ...webpackConfig.ignoreWarnings,
    function ignoreSourceMapsLoaderWarnings(warning) {
      return (
        warning?.module?.resource?.includes?.('node_modules') &&
        warning?.details?.includes?.('source-map-loader')
      );
    },
  ];
};
