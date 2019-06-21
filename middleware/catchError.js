module.exports = async function(ctx, next) {
  try {
    await next();
  } catch (e) {
    ctx.body = '服务器暂时无法访问';
  }
};
