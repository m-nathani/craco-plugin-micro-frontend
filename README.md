# craco-plugin-micro-frontend

Convert your **CRA 5** project into a node library application without ejecting or losing update support of react-scripts

**Please find the detail explanation of how to use it [here](https://dev.to/mnathani/plugin-to-make-micro-frontend-using-cra-425n)**

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
        minimize: true, // defaults to false, sets optimization.minimize value
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

`craco-plugin-micro-frontend` now supports `react-script: "^5.0.0"` with `wepback: "^5.64.4"`

### Changes might need to support create-react-app 5 would:

1. moving workers to new way of importing, (detail)[https://webpack.js.org/guides/web-workers/]
2. fixing lint issues
3. adding .babelrc with below if using decorators

```js
  "plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]
```

4. for any further issues check [@craco/craco](https://github.com/dilanx/craco/issues) or [create-react-app](https://github.com/facebook/create-react-app/issues)

## License

**`craco-plugin-micro-frontend`** is open source software licensed as MIT.
