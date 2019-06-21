const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const catchError = require('./middleware/catchError');

const InitManage = require('./app/core/init');

const app = new Koa();
app.use(catchError);
app.use(bodyParser());
InitManage.initCore(app);

app.listen(3000);
