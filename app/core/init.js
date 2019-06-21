const requireDirectory = require('require-directory');
const Router = require('koa-router');

class InitManage {
  static initCore(app) {
    // 入口方法
    InitManage.app = app;
    InitManage.initLoadRouters();
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`;
    requireDirectory(module, apiDirectory, { visit: visitor });

    function visitor(obj) {
      if (obj instanceof Router) {
        InitManage.app.use(obj.routes());
      }
    }
  }
}

module.exports = InitManage;
