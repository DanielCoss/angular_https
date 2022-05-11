import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Request } from "./request";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }

  public post(url:string, request:Request){
    return this.http.post<Request>(url,request);
  }

}
