const Koa = require('koa');

const app = new Koa();

var Router = require('koa-router');
var router = new Router();

// 洋葱模型
// app.use(async (ctx, next) => {
//   ctx.body = ctx;
//   console.log(ctx);
//   const a = await next();
// })

// app.use((ctx, next) => {
//   // return 2;
// })

// 路由系统
router.get('/home', (ctx, next) => {
  ctx.body = 'home';
});

app.use(router.routes());

app.listen(3000);
