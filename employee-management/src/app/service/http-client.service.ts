import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public wmpName:string,
    public empPhone:string,
    public empMail:string,
  ) {}
}

export class ParcelDetails{
  constructor(
  public empId:string,
 public parcelID:string,
 public salary:string,
 public cname:string,
 public rack:string,
  public note:string,
  public r_time:string,
  public d_time:string,
  public status:string,
  public ephone:string,
  public email:string,

  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

  getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<ParcelDetails[]>('http://localhost:8080/employees');
  }

  dashboardGo()
{
  return this.httpClient.get("http://localhost:8080/dashboard");
}

  receiveNow()
  {
    console.log("In receive");

    
  }
  
  scheduleLater(ParcelDetails)
  {
    alert("Http Schedule");
    return this.httpClient.post<ParcelDetails>("http://localhost:8080/schedulelater",ParcelDetails);
  }

  assignElse(Employee)
  {
    return this.httpClient.post<Employee>("http://localhost:8080/dashboard",Employee);
  }

  schedule()
  {
    return this.httpClient.get("http://localhost:8080/schedulelater");
  }
  

}