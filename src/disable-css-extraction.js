module.exports = (webpackConfig) => {
  webpackConfig.module.rules[1].oneOf.forEach((x) => {
    if (!x.use) return;

    if (Array.isArray(x.use)) {
      x.use.forEach((use) => {
        if (use.loader && use.loader.includes('mini-css-extract-plugin')) {
          // NOTE: this need fixed "style-loader" version: 1.3.0
          // Why ? because a/c to ejected CRA at October 2021, thats the version of "style-loader" used..
          // update it if ejected CRA has updated the "style-loader"
          // Moreover, update "node-sass" when cra updates
          use.loader = require.resolve('style-loader/dist/cjs.js');
          delete use.options;
        }
      });
    }
  });
};
