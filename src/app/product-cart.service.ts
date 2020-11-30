import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  private _cartList: Product[]=[];//variable observada, por convencion se escribe guion abajo
//observable
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);//pasa por parametro el array de product

  constructor() { }

  addToCart(product: Product) {
//arrow functions: pasa por parametro el valor, y luego hace la comparacion
  let item: Product =  this._cartList.find((v1)=>v1.name ==product.name);
  //si no encontro el item, es decir es item ===null
  if(!item){// si pongo dos veces en comprar, no la agrega dos veces
    this._cartList.push({... product});// si no esta, la agrego. los puntitos esta clonando un objeto, hace una push de la copia
  }else{
  item.quantity+=product.quantity; // sumo la cantidad que tenia anteriormente mas la cantidad a insertar
  }
  console.log(this._cartList);

  this.cartList.next(this._cartList);// emite el nuevo valor, esto es equivalente al emit de eventos
  }

}
