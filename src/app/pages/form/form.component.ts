import { Product } from './../../models/product';
import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  constructor(private servicio:ServiceService){}
  public Product:Product={
    id: "",
  name: "",
  price: "",
  description: "",
  stars: "",
  image: "",
  }
  productIdToUpdate: string = ""
 addProduct(){
  this.servicio.postProduct(this.Product).subscribe();
  alert("PRODUCTO CREADO")
  console.log(`has creado:, ${this.Product.name}`);


 }

 updateProduct() {
  const productId = this.Product.id

  this.servicio.putProduct(productId, this.Product).subscribe(
    () => {
      alert("PRODUCTO ACTUALIZADO");
    },
    (error) => {
      console.error('Error al actualizar el producto', error);
    }
  );
}
}




