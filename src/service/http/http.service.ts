import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlConfig} from '../../config/UrlConfig';
import {catchError} from 'rxjs/operators';
import {ExceptionService} from '../../exception/exception.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              private exceptionService: ExceptionService) {

  }

  /**
   * TODO get 路径后追加参数
   * @param id
   */
  public getA(id: string) {
    return this.http.get(UrlConfig.getA.replace('{id}', id)).pipe(
      catchError(this.exceptionService.handle)
    );
  }

  /**
   * TODO get params方式传参
   * @param id
   */
  public getB(id: string) {
    const option = {
      params: {id: id}
    };
    return this.http.get(UrlConfig.getB, option).pipe(
      catchError(this.exceptionService.handle)
    );
  }

  /**
   * TODO post params方式传参
   * @param id
   */
  public postA(id: string) {
    const params = {
      id: id
    };
    return this.http.post(UrlConfig.post, null, { params: params } ).pipe(
      catchError(this.exceptionService.handle)
    );
  }

  /**
   * TODO post body传参
   * @param id
   */
  public postB(object: object) {
    return this.http.post(UrlConfig.post, object).pipe(
      catchError(this.exceptionService.handle)
    );
  }
}
