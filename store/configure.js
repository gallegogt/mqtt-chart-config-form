// Use DefinePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.
/* eslint-disable global-require */
if (__DEVELOPMENT__) {
  module.exports = require('./store.dev');
} else {
  module.exports = require('./store.prod');
}
/* eslint-enable global-require */
