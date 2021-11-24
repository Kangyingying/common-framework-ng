import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Exception} from './Exception';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExceptionService {
  constructor() { }

  /**
   * 异常处理
   */
  handle(error: HttpErrorResponse) {
    const huohuaError = new Exception(error);
    return throwError(huohuaError);
  }
}
