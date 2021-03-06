import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(req)
    req = req.clone({
      setHeaders: {
        Authorization: localStorage.getItem('token') || 'token'
      }
    })
    return next.handle(req);
  }
}