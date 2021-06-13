import { Employee } from './../model/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../model/response-dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  private baseUrl  = 'http://localhost:8080/EmployeeDashBoard/dashboard/v1/employee/getAll';
  httpClient: HttpClient;

  constructor(httpClient : HttpClient) {
     this.httpClient = httpClient;
   }

  public getEmployeeList() : Observable<ResponseDTO> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('Test:123456')
      })
    };
    return this.httpClient.get<ResponseDTO>(this.baseUrl,httpOptions);
  }
}
