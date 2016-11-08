/*jshint node:true*/
var build = require('./config/build');

module.exports = {
  'framework': 'qunit',
  'test_page': 'tests/index.html?hidepassed',
  'disable_watching': true,
  
  'launchers': build.launchers,

  'launch_in_ci': build.torun,

  'launch_in_dev': [
    'PhantomJS',
    'Chrome',
    'Firefox',
    'IE',
    'Safari',
    'Opera'
  ],
  
  'browser_args': {
    'Chrome': [
      '--auto-open-devtools-for-tabs',
      '--purge-memory-button',
      '--disable-translate',
      '--disable-plugins'
    ],
    'Firefox': [
      '-console',
      '-safe-mode'
    ],
    'IE': [
      '/extoff'
    ],
    'Opera': [
      '-nosession'
    ]
  }
};
