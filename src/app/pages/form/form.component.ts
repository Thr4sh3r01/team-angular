import { Product } from './../../models/product';
import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
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
 addProduct(){
  this.servicio.postProduct(this.Product).subscribe();

 }
}
