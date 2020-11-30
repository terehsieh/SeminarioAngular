import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-list/Product';
import { tap } from 'rxjs/operators'; 
//url del fetch
const URL= 'https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]>{// devuelve un Observable de array de productos
    //fetch
     return this.http.get<Product[]>(URL) //devuelve un observable, para que alguien se suscriba y use los datos 
     .pipe(
       //modificar la quantity antes de enviar al front
       tap((products: Product[]) => products.forEach(product => product.quantity=0)));// permite cambiar dentro del observable (TAP)
  }
}
