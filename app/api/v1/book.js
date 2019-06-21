const Router = require('koa-router');
const router = new Router();

router.get('/v1/book/latest', (ctx, next) => {
  const path = ctx.param;
  const header = ctx.request.header;
  const query = ctx.request.querystring;
  const body = ctx.request.body;
  ctx.body = {
    path,
    header,
    query
  };
  throw new Error('api is message');
});

module.exports = router;
