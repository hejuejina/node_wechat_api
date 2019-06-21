class HttpException extends Error {
  constructor(msg = '服务器异常', code = 400, errorCode = 10000) {
    super();
    this.errorCode = errorCode;
    this.code = code;
    this.msg = msg;
  }
}


module.exports = HttpException;
