
export enum ExceptionEnum {
  network_disconnected,

  /* http status 401  */
  sc_unauthorized,

  /* http status 499，业务错误  */
  biz_error,

  /* http status 498，参数验证错误  */
  verify_error,

  /* 未定义异常*/
  undefined_error,

  /*自定义异常*/
  custom_error,

  /*服务端异常*/
  server_error
}

export enum ErrorType {
  responseError = 'HttpErrorResponse'
}
