import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HimalayaAboutComponent } from './himalaya-about/himalaya-about.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HimalayaAboutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
