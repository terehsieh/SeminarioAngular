import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
// declarar Json para usar en la lista 

products: Product[]=
[{
  name: 'Apple',
  type: 'fruit',
  price: 10,
  stock: 0,
  image: 'assets/img/apple.jpg',
  clearance: true, // oferta
  quantity:0, // por defecto 
},
{
  name: 'Kiwi',
  type: 'fruit',
  price: 10,
  stock: 20,
  image: 'assets/img/apple.jpg',
  clearance: false,
  quantity:0,
}]
  constructor() { }

  ngOnInit(): void {
  }

upQuantity(product: Product): void{
  if(product.stock> product.quantity)
    product.quantity++;
}

downQuantity(product: Product): void{
  if(product.quantity>0)
    product.quantity--;
  }
}
