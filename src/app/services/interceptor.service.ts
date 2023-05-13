import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localStorage.getItem('token');
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }
    if (!req.headers.has('Accept')) {
      req = req.clone({
        headers: req.headers.set('Accept', '*/*'),
      });
    }
    if (!req.headers.has('Access-Control-Allow-Origin')) {
      req = req.clone({
        headers: req.headers.set('Access-Control-Allow-Origin', '*'),
      });
    }
    req = req.clone({
      headers: req.headers.set('x-api-key', environment.X_API_KEY),
    });
    if (token) {
      req = req.clone({
        headers: req.headers.set('token', token),
      });
    }

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => {
          return error;
        });
      })
    );
  }
}
