import { Product } from './../../models/product';
import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  id!:string;
  Product!:Product;
  constructor(private servicio:ServiceService,private rutaActivada:ActivatedRoute){}

  ngOnInit():void{
    this.rutaActivada.paramMap.subscribe(params=>{console.log(params);

    })
    this.servicio.getProductsId(this.id).subscribe((data:any)=>{
      console.log(data);
      this.Product=data

    })



  }


}
