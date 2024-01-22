import { ServiceService } from './../../services/service.service';

import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  public ProductsList:Product[]=[]

  constructor(private servicio:ServiceService){

  }
  ngOnInit():void{

    this.servicio.getProducts().subscribe((data:any)=>{
      console.log("estoy recibiendo los datos en products",data);
      this.ProductsList=data
    })}

}
