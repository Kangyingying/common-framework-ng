import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // 修改请求头， 统一在头部中添加token、sig
    const clonedRequest = request.clone({
      headers: request.headers.set('token', '').set('sig', '')
    });
    return next.handle(clonedRequest);
  }
}
