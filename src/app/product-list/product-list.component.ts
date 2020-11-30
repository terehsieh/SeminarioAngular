import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // declarar Json para usar en la lista 

  products: Product[] =[];
    // [{
    //   name: 'Apple',
    //   type: 'fruit',
    //   price: 10,
    //   stock: 0,
    //   image: 'assets/img/apple.jpg',
    //   clearance: true, // oferta
    //   quantity: 0, // por defecto 
    // },
    // {
    //   name: 'Kiwi',
    //   type: 'fruit',
    //   price: 10,
    //   stock: 20,
    //   image: 'assets/img/apple.jpg',
    //   clearance: false,
    //   quantity: 0,
    // }];
    //tiene un singleton, si no tiene lo crea y si lo tiene devuelve el mismo
  constructor(private cart: ProductCartService,
    private productDataService: ProductDataService) { // al poner private ya me lo declara directamente afuera
  
  }
//ciclo de vida
  ngOnInit(): void {
    this.productDataService.getAll()
    .subscribe(products=>this.products=products);//se susbscribe y actualiza los datos
  }

  addToCart(product: Product):void{
    this.cart.addToCart(product);
    product.stock-=product.quantity;// actualizo el stock
    product.quantity=0; // volver a setear el valor en 0
  }

  
}
