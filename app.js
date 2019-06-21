const Koa = require('koa');
var Router = require('koa-router');
var requireDirectory = require('require-directory');
var classic = require('./api/v1/classic')

const app = new Koa();

requireDirectory(module, './api', {visit:  visitor});
function visitor(obj) {

  if (obj instanceof Router) {
    app.use(classic.routes());
  }
}
app.listen(3000);
