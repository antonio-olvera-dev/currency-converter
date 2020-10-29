import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http:HttpClient) { }


  getData(url:string):any{

    return this.http.get(url);
  }


}
