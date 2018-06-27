import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './home/cart/cart.component';
import { ProductsComponent } from './home/products/products.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   { path: 'products', component: CartComponent },
    //   { path: 'home', component: ProductsComponent },
    // ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
