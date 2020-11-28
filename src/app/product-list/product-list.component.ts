import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // declarar Json para usar en la lista 

  products: Product[] =
    [{
      name: 'Apple',
      type: 'fruit',
      price: 10,
      stock: 0,
      image: 'assets/img/apple.jpg',
      clearance: true, // oferta
      quantity: 0, // por defecto 
    },
    {
      name: 'Kiwi',
      type: 'fruit',
      price: 10,
      stock: 20,
      image: 'assets/img/apple.jpg',
      clearance: false,
      quantity: 0,
    }]
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: Product): void {
    if (product.quantity < product.stock)
      product.quantity++;
  }

  downQuantity(product: Product): void {
    if (product.quantity > 0)
      product.quantity--;
  }

  changeQuantity(e, product: Product): void {
    // controlar q se ingresa numeros de 0 al 9
    // if(event.key>0 && event.key<1000 ){
    // product.quantity=event.key;
    // }else{

    //   product.quantity=0;
    // }
    
    //https://stackoverflow.com/questions/41465542/angular2-input-field-to-accept-only-numbers/46754601
console.log(e);
  }
}
