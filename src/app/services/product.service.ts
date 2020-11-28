import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})


export class ProductService {
  productos:IProduct[] = [];
  concept= "";
  constructor() {
    this.productos = [
      // {
      //   Nombre: "BIG MAC",
      //   Descripcion: "La perfección hecha hamburguesa que te hace agua la boca comienza con dos patties de 100% carne y la salsa Big Mac®",
      //   Imagen: '../../../assets/images/image1.jpg',
      //   Precio: 45
      // },
      // {
      //   Nombre: "SUNDAE CHOCOLATE/FRESA",
      //   Descripcion: "Cremoso helado de vainilla con un fudge de chocolate.",
      //   Imagen: '../../../assets/images/image2.png',
      //   Precio: 35
      // },
      // {
      //   Nombre: "PAPAS A LA FRANCESA",
      //   Descripcion: "Más deliciosas que nunca, nuestras famosas papas a la francesa son de corte regular, saladito, doradas por fuera y suaves por dentro.",
      //   Imagen: '../../../assets/images/image3.png',
      //   Precio: 30
      // }
      // ,
      // {
      //   Nombre: "PIZZA SUPER CHEESE",
      //   Descripcion: "Pizza GDE Pepperoni",
      //   Imagen: '../../../assets/images/image4.jpg',
      //   Precio: 120
      // }
      // ,
      // {
      //   Nombre: "SUSHI TEPPANYAKI",
      //   Descripcion: "Verduras mixtas asadas con camaron",
      //   Imagen: '../../../assets/images/image5.jpg',
      //   Precio: 75
      // }
      // ,
      // {
      //   Nombre: "ENSALADA",
      //   Descripcion: "Base de lechuga, dos ingredientes de la barra fría, cien gramos de proteína, croutones, queso parmesano y aderezo.",
      //   Imagen: '../../../assets/images/image6.jpg',
      //   Precio: 60
      // }
      // ,
      // {
      //   Nombre: "BONELESS",
      //   Descripcion: "Trocitos de pechuga de pollo fritos u horneados acompañados de salsas diversas con sus respectivas guarniciones.",
      //   Imagen: '../../../assets/images/image7.jpg',
      //   Precio: 95
      // }
      ];
      for(var i=0;i<this.productos.length; i++) {
        this.concept = ""+i;
      localStorage.setItem(this.concept, JSON.stringify(this.productos[i]));
        }
  //localStorage.clear()
    }
  
  
    getProducts(){
      var value= "";
      for(var i=0;i<localStorage.length; i++) {
        value= ""+i;
       this.productos.push( JSON.parse(localStorage.getItem(value) || '{}'));
      }
      return this.productos;
    }
  }

 //OTRA FORMA DE HACERLO
//  localStorage.setItem("producto", JSON.stringify(this.productos));

 
//    getProducts(){
//    this.productos.push( JSON.parse(localStorage.getItem("producto") || '{}'));
//    this.productos.pop();
//   return this.productos;
//   }
 