import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class HttpDataService {

  private uri = 'http://localhost:8080/todo';

  constructor(private http: HttpClient) {
  }

  public httpPost(data: any): Observable<any> {
    return this.http.post(`${this.uri}`, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public httpPut(id: number, values: any): Observable<any> {
    const headers = new HttpHeaders();
    const params = new HttpParams();

    headers.set('Content-Type', 'application/json');
    params.set('_id', String(id));

    return this.http.put(`${this.uri}/${id}`, values, { headers });
  }

  public httpGet(): Observable<any> {
    return this.http.get(`${this.uri}`, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public httpGetById(id: number): Observable<any> {
    const headers = new HttpHeaders();
    const params = new HttpParams();

    headers.set('Content-Type', 'application/json');
    params.set('id', String(id));

    return this.http.get(`${this.uri}/${id}`, { headers, params });
  }

  public httpDelete(id: number): Observable<any> {
    const headers = new HttpHeaders();
    const params = new HttpParams();

    headers.set('Content-Type', 'application/json');
    params.set('id', String(id));

    return this.http.delete(`${this.uri}/${id}`, { headers, params });
  }
}
