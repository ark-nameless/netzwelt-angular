import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TerritoriesService {
  httpOptions = { 
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'accept': 'text/plain'
      }
    )
  }

  constructor(private http: HttpClient) {}

  getAllTeritories() {
    return this.http.get(environment.API_URL + '/Territories/All')
  }
}
