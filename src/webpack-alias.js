const path = require('path');

module.exports = ({ cracoConfig }) => {
  cracoConfig.webpack = {
    ...(cracoConfig?.webpack || {}),
    alias: {
      '@actions': path.resolve('./src/actions'),
      '@apis': path.resolve('./src/apis'),
      '@api': path.resolve('./src/api'),
      '@assets': path.resolve('./src/assets'),
      '@components': path.resolve('./src/components'),
      '@constants': path.resolve('./src/constants'),
      '@containers': path.resolve('./src/containers'),
      '@hooks': path.resolve('./src/hooks'),
      '@images': path.resolve('./src/images'),
      '@locales': path.resolve('./src/locales'),
      '@mocks': path.resolve('./src/mocks'),
      '@pages': path.resolve('./src/pages'),
      '@reducers': path.resolve('./src/reducers'),
      '@routes': path.resolve('./src/routes'),
      '@services': path.resolve('./src/services'),
      '@styles': path.resolve('./src/styles'),
      '@store': path.resolve('./src/store'),
      '@redux-store': path.resolve('./src/redux-store'),
      '@tests': path.resolve('./src/tests'),
      '@utils': path.resolve('./src/utils'),
      '@validations': path.resolve('./src/validations'),
      '@workers': path.resolve('./src/workers'),
      ...(cracoConfig?.webpack?.alias || {}),
    },
  };
};
