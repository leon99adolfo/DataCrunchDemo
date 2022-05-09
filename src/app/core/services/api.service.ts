import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor
  constructor(
    private _httpClient: HttpClient
  ) { }

  // private methods
  private generalGet<T>(baseUrl: string, url: string, params?: HttpParams): Observable<T> {
    const reqOpts = { params };
    return this._httpClient.get<T>(`${baseUrl}/${url}`, reqOpts);
  }

  // public methods
  externalGet<T>(url: string, params?: HttpParams): Observable<T> {
    const reqOpts = { params };
    return this._httpClient.get<T>(url, reqOpts);
  }

  localGet<T>(url: string, params?: HttpParams): Observable<T> {
    return this.generalGet<T>('', url, params);
  }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.generalGet<T>(environment.backendUrl, url, params);
  }

  post<T>(url: string, body: any): Observable<any> {
    const options: any = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    let jsonBody = null;

    if(body !== null)
      jsonBody = JSON.stringify(body);

    return this._httpClient.post<T>(`${environment.backendUrl}/${url}`, jsonBody, options);
  }

  put<T>(url: string, body: any): Observable<any> {
    const options: any = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    const jsonBody = JSON.stringify(body);
    return this._httpClient.put<T>(`${environment.backendUrl}/${url}`, jsonBody, options);
  }

  delete<T>(url: string, params?: HttpParams): Observable<T> {
    const reqOpts = { params };
    return this._httpClient.delete<T>(`${environment.backendUrl}/${url}`, reqOpts);
  }
}
