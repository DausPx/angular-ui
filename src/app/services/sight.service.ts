import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sight } from '../models/sight.model';

const baseUrl = 'http://localhost:8080/api/sight'

@Injectable({
  providedIn: 'root'
})
export class SightService {

  constructor(private http: HttpClient) { }

  search(name?: string, relevance?: string): Observable<Sight[]>{
    let params = new HttpParams()

    if(name){
      params.set("name", name)
    }

    if(relevance){
      params.set("relevance", relevance)
    }

    return this.http.get<Sight[]>(baseUrl,{
      params: params
    })
  }

  get(id: any): Observable<Sight>{
    return this.http.get(`${baseUrl}/${id}`)
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
