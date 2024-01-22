import { ServiceService } from './../../services/service.service';
import { InterfaceProducts } from '../../models/interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  public ProductsList:InterfaceProducts[]=[]

  constructor(private servicio:ServiceService){

  }
  ngOnInit():void{

    this.servicio.getProducts().subscribe((data:any)=>{
      console.log("estoy recibiendo los datos en products",data);
      this.ProductsList=data
    })}

}
