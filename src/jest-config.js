module.exports = ({ jestConfig, pluginOptions: { customJestConfig = {} } }) => {
  jestConfig.moduleNameMapper = {
    ...(jestConfig?.moduleNameMapper || {}),
    '^@actions(.*)$': '<rootDir>/src/actions$1',
    '^@apis(.*)$': '<rootDir>/src/apis$1',
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@containers(.*)$': '<rootDir>/src/containers$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@images(.*)$': '<rootDir>/src/images$1',
    '^@locales(.*)$': '<rootDir>/src/locales$1',
    '^@mocks(.*)$': '<rootDir>/src/mocks$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@reducers(.*)$': '<rootDir>/src/reducers$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
    '^@redux-store(.*)$': '<rootDir>/src/redux-store$1',
    '^@tests(.*)$': '<rootDir>/src/tests$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@validations(.*)$': '<rootDir>/src/validations$1',
    '^lodash-es(.*)$': 'lodash$1',
    '\\workers(.*)$': '<rootDir>/src/__mocks__/worker.mock.js',
  };

  jestConfig.timers = 'modern';

  // TODO: enable when test meets the threshold
  // jestConfig.coverageThreshold = {
  //   ...(jestConfig?.coverageThreshold || {}),
  //   global: {
  //     branches: 90,
  //     functions: 90,
  //     lines: 90,
  //     statements: 90,
  //   },
  // };

  // Always return the config object.
  return { ...jestConfig, ...customJestConfig };
};
