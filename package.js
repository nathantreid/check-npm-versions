Package.describe({
  name: 'check-npm-versions',
  version: '0.0.1',
  summary: 'Check that required npm packages are installed at the app level',
  git: 'https://github.com/tmeasday/check-npm-versions.git',
  documentation: 'README.md'
});

Npm.depends({'semver': '5.1.0'});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.7');
  api.use('ecmascript');
  api.mainModule('check-npm-versions.js');
});