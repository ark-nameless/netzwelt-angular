import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  httpOptions = { 
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'accept': 'text/plain'
      }
    )
  }

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    let data = {username: username, password: password };

    return this.http.post(environment.API_URL + '/Account/SignIn', JSON.stringify(data), this.httpOptions);
  }
}
