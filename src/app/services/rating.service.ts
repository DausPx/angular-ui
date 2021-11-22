import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../models/rating.model';

const baseUrl = 'http://localhost:8080/api/rating'

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  getSightRating(sightId: any): Observable<any>{
    return this.http.get(`${baseUrl}?sightId=${sightId}`)
  }

  create(rating: number, sightId: any): Observable<any>{
    return this.http.post(`${baseUrl}?sightId=${sightId}&rating=${rating}`, false)
  }
}
