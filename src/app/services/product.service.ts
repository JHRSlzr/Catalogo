import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  productos:IProduct[] = [
    {
      Nombre: "BigMac",
      Descripcion: "La perfección hecha hamburguesa que te hace agua la boca comienza con dos patties de 100% carne y la salsa Big Mac®",
      Imagen: '../images/image1.jpg',
      Precio: 45
    }
    ];
  constructor() { }

  getProducts(){
    return this.productos;
  }
}
