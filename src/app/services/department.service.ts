import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../model/response-dto';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl  = 'http://localhost:8080/EmployeeDashBoard/dashboard/v1/department/getAll';
  httpClient: HttpClient;

  constructor(httpClient : HttpClient) {
     this.httpClient = httpClient;
   }

  public getdepartmentList() : Observable<ResponseDTO> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('Test:123456')
      })
    };
    return this.httpClient.get<ResponseDTO>(this.baseUrl,httpOptions);
  }
}
