import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JockeyService {

  baseUrl: string = 'https://localhost:44313//api/jockey'

  constructor(private http: HttpClient) { }

  postJockeys(jockeys: any) {
    return this.http.post(this.baseUrl, jockeys)
  }
}
