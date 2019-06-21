const HttpException = require('../app/core/http-exception');

module.exports = async function (ctx, next) {
  try {
    await next();
  } catch (e) {
    // 返回前端的信息
    // {
          // error_code 业状态码z
          // message 详细信息
          // http状态码
          // request 当前请求url
    // }
    // hhtp status 
    if (e instanceof HttpException) {
      ctx.body = {
        error_code: e.errorCode,
        msg: e.msg,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = e.code;
    }

  }
};
