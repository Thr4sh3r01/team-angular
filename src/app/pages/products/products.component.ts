import { ServiceService } from './../../services/service.service';

import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  public ProductsList: Product[] = [];
  public paginaActual: number = 1;

  constructor(private servicio: ServiceService) {}
  ngOnInit(): void {
    this.servicio.getProducts(this.paginaActual).subscribe((data: any) => {
      console.log('estoy recibiendo los datos en products', data);
      this.ProductsList = data;

      this.cargarProductos();
    });
  }

  cargarProductos() {
    this.servicio.getProducts(this.paginaActual).subscribe((data: any) => {
      console.log('Estoy recibiendo producto al paginar', data);
      this.ProductsList = data;
    });
  }

  previousPage() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarProductos();
    }
  }

  nextPage() {
    this.paginaActual++;
    this.cargarProductos();
  }
}

