import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

productos:IProduct[] = [
];

  constructor(private productService:ProductService) {
    this.productos = productService.getProducts();
   }

  ngOnInit(): void {
  }

}
