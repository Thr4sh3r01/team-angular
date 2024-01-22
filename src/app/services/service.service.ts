import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class ServiceService {
  public baseUrl:string="http://localhost:3000"
  public ProductsUrl:string=`${this.baseUrl}/Products`

  constructor(private http:HttpClient) {}
  public getProducts(){
    return this.http.get(this.ProductsUrl)
  }
}
