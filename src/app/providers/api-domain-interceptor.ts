import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiDomainInterceptor implements HttpInterceptor {
  domain: string;
  constructor(@Inject('API_DOMAIN') domain: string) {
    this.domain = domain;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiReq = req;
    const urlConcat = this.domain + req.url;
    apiReq = req.clone({ url: urlConcat });
    return next.handle(apiReq);
  }
}
