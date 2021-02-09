import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private _jsonURL = 'C:/Dad/ATT/jockey.json';

  constructor(private http: HttpClient) { 
    //this.getJSON().subscribe(data => {
    //  console.log(data);
    // });
  }
  
  public getJSON(jsonFile): Observable<any> {
    return this.http.get(jsonFile);
  }  
}
