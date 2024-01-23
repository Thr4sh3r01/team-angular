
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class ServiceService {
  public baseUrl:string="http://localhost:3000"
  public ProductsUrl:string=`${this.baseUrl}/Products`

  constructor(private http:HttpClient) {}
  public getProducts(page: number, limit: number = 10){
    const apiUrl = `${this.ProductsUrl}?page=${page}&limit=${limit}`;
    console.log('API URL:', apiUrl);//que pasa
    return this.http.get(apiUrl)
  }

  public getProductsId(id:string){
    return this.http.get(`${this.ProductsUrl}/${id}`)
  }

  public postProduct(Product:any){
    return this.http.post(this.ProductsUrl,Product)

  }

  putProduct(id: string, product: any) {
    return this.http.put(`${this.ProductsUrl}/${id}`, product);
  }


}
