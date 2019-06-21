const Router = require('koa-router');
const router = new Router();

const HttpException = require('../../core/http-exception');
const parameterException = require('../../core/parameter-exception');

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
  if (true) {
    // httpError基类
    // throw new HttpException('参数错误', 400, 10001);

    throw new parameterException();
  }
});

module.exports = router;
