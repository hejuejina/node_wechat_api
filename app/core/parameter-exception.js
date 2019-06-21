const HttpException = require('./http-exception');
class parameterException extends HttpException {
  constructor(msg = '参数异常', errorCode = 10001) {
    super();
    this.errorCode = errorCode;
    this.code = 400;
    this.msg = msg;
  }
}

module.exports = parameterException;
