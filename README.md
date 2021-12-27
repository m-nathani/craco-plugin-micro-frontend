# craco-plugin-micro-frontend

Convert your CRA project into a node library application without ejecting or losing update support of react-scripts

![](https://img.shields.io/npm/v/craco-plugin-micro-frontend.svg?style=flat)
![](https://img.shields.io/npm/dt/craco-plugin-micro-frontend.svg?style=flat)


## Demo

Here is the [code](https://github.com/m-nathani/react-bootstrap) for how to use this package in production application.

## Install

```
npm install craco-plugin-micro-frontend --save-dev
```

## Usage

1. Add the plugin into your craco.config.js;

```js
const microFrontedPlugin = require('craco-plugin-micro-frontend');

module.exports = {
  plugins: [
    {
      plugin: microFrontedPlugin,
      options: {
        orgName: 'my-org',
        fileName: 'my-app.js', // should same as package main
        entry: 'src/index.injectable.js', //defaults to src/index.injectable.js,
        orgPackagesAsExternal: false, // defaults to false. marks packages that has @my-org prefix as external so they are not included in the bundle
        reactPackagesAsExternal: true, // defaults to true. marks react and react-dom as external so they are not included in the bundle
        externals: ['react-router', 'react-router-dom'], // defaults to []. marks the specified modules as external so they are not included in the bundle
        minimize: false, // defaults to false, sets optimization.minimize value
        libraryTarget: 'commonjs2', // defaults to umd
        outputPath: 'dist',
        customJestConfig: {}, // custom jest configurations
      },
    },
  ],
};
```

2. Update the scripts section of your `package.json` as follows:

```json
  ...
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "build:lib": "REACT_APP_INJECTABLE=true craco build",
    "test": "craco test",
    "coverage": "npm run test -- --coverage --watchAll=false --passWithNoTests",
    "coverage:browser": "npm run coverage && open coverage/lcov-report/index.html",
    "analyze": "REACT_APP_INTERACTIVE_ANALYZE=true npm run build",
```

3. Run `npm run build:lib` to generate your microfrontend app bundle. The output will be located under `dist` folder and named as `my-app.js`

## NOTE

`craco-plugin-micro-frontend` is waiting for @craco to update its peer deps to `react-script: "5.0.0"`
Further information at : [@craco](https://github.com/gsoft-inc/craco/issues/353).

## License

craco-plugin-micro-frontend is open source software licensed as MIT.

Inspired by: [craco-plugin-single-spa-application](https://github.com/hasanayan/craco-plugin-single-spa-application)
