const Koa = require('koa');
const app = new Koa();

const classic = require('./api/v1/classic');
const book = require('./api/v1/book');

// 洋葱模型
// app.use(async (ctx, next) => {
//   ctx.body = ctx;
//   console.log(ctx);
//   const a = await next();
// })

// app.use((ctx, next) => {
//   // return 2;
// })

app.use(book.routes());
app.use(classic.routes());

app.listen(3000);

