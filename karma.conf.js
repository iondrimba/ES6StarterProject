const istanbul = require('browserify-istanbul');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'src/scripts/app.js',
      'spec/*.js'
    ],
    included: false,
    browserify: {
      debug: true,
      transform: ['stringify', 'babelify', istanbul({
        defaultIgnore: true
      })],
      extensions: ['.js'],
      bundleDelay: 1000
    },
    babelPreprocessor: {
      options: {
        presets: ['env']
      },
      filename: function (file) {
        return file.originalPath;
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    preprocessors: {
      'src/scripts/app.js': ['babel', 'browserify'],
      'spec/*.js': ['babel', 'browserify']
    },
    coverageReporter: {
      instrumenters: { isparta: require('isparta') },
      instrumenter: {
        'spec/*.js': 'isparta'
      },
      instrumenterOptions: {
        isparta: { babel: { presets: 'env' } }
      },
      istanbul: { noCompact: true },
      dir: 'test/reports/coverage',
      reporters: [
        {
          type: 'lcovonly',
          subdir: 'report-lcov'
        }
      ]
    },
    reporters: ['spec', 'coverage', 'threshold'],
    thresholdReporter: {
      statements: 80,
      branches: 50,
      functions: 85,
      lines: 90
    },
    plugins: [
      'karma-coverage',
      'karma-browserify',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-threshold-reporter',
      'karma-sourcemap-loader',
      'karma-babel-preprocessor',
      'karma-chrome-launcher'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222'
        ]
      }
    },
    singleRun: true,
    concurrency: Infinity
  })
}
