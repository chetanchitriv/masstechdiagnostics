import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl=environment.apiendpoint
  constructor(private http:HttpClient) { }

  createMaster(data:any): Observable<any> {
    return this.http.post(this.apiUrl+`masters`,data);    
  }
  getmasters(): Observable<any> {
    return this.http.get(this.apiUrl+`masters`);    
  }
  updatemaster(id:any,data:any){
    return this.http.put(`${this.apiUrl}masters/${id}`,data);    
  }
  getcurrentdata(id:any){
     return this.http.get(`${this.apiUrl}masters/${id}`)
  }
  deleteMaster(id:any){
    return this.http.delete(`${this.apiUrl}masters/${id}`)
  }
}
