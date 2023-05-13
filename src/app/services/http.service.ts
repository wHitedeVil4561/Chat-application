import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpclient: HttpClient) {}
  get(path: string, payload: any) {
    let params;
    if (payload) {
      params = new HttpParams();
      params = params.appendAll(payload);
    }
    return this.httpclient.get(path, { params });
  }
  post(path: string, payload: any) {
    return this.httpclient.post(path, payload).pipe();
  }
}
