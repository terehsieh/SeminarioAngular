import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartList$:Observable<Product[]>; // convencio se pone signo pesos para saber que es un observable y no un dato real
  constructor(private cart: ProductCartService) { 
    //suscribir
    this.cartList$=cart.cartList.asObservable(); //definir q es un observable
    // cart.cartList.subscribe((observable)=>this.cartList= observable);
  }

  ngOnInit(): void {
  }

}
