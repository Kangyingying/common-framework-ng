import {ErrorType, ExceptionEnum} from './ExceptionEnum';

/**
 * 自定义异常
 *@author kyy
 *@date 2021/11/24 14:25
 */
export class Exception {
  public name!: string;
  public code: number;
  public message: string;

  constructor(error: any) {

    // 检查网络是否连接
    if (navigator.onLine === false) {
      this.name    = ExceptionEnum.network_disconnected.toString();
      this.code    = 0;
      this.message = '网络未连接，请检查网络';
      return;
    }

    // response异常
    if (error.name === ErrorType.responseError) {
      this.code    = error.status;
      this.message = error.error.msg;
      switch (error.status) {
        case 401:
          this.name = ExceptionEnum.sc_unauthorized.toString();
          break;
        case 404:
          this.name = ExceptionEnum.custom_error.toString();
          this.message = '接口路径不存在';
          break;
        case 498:
          this.name = ExceptionEnum.verify_error.toString();
          break;
        case 499:
          this.name = ExceptionEnum.biz_error.toString();
          break;
        case 504:
          this.message = '服务器连接超时，请稍候再试';
          this.name    = ExceptionEnum.server_error.toString();
          break;
      }
      return;
    }

    // 自定义异常
    if (error.error instanceof ErrorEvent) {
      this.message = error.error.message;
      this.code    = 1;
      this.name    = ExceptionEnum.custom_error.toString();
      return;
    }

    // 其他异常 code = 2
    this.code    = 2;
    this.message = '未定义异常';
    this.name    = ExceptionEnum.undefined_error.toString();
  }
}
