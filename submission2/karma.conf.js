module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'specs/**/*Spec.js',
    ],

    exclude: [],

    preprocessors: {
      'specs/**/*Spec.js': ['webpack', 'sourcemap', 'babel'],
    },

    webpack: {
      devtool: 'inline-source-map',
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
    },

    webpackMiddleware: {
      stats: 'errors-only',
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity,

    client: {
      jest: {
        setupFiles: ['fake-indexeddb/auto'],
        testEnvironment: 'jsdom',
        transform: {
          '^.+\\.(js|ts)$': 'babel-jest',
        },
      },
    },
  });
};
