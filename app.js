const Koa = require('koa');
const Router = require('koa-router');

const InitManage = require('./app/core/init');

const app = new Koa();
InitManage.initCore(app);

app.listen(3000);
