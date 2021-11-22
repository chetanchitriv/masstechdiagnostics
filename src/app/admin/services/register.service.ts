import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

   apiUrl=environment.apiendpoint
  constructor(
    private http:HttpClient,
  ) { }
  
  postResgister(data:any): Observable<any> {
    return this.http.post(this.apiUrl+`registers`,data);    
  }

}
