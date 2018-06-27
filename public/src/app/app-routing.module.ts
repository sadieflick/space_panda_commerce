import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './home/cart/cart.component';
import { ProductsComponent } from './home/products/products.component';
import { NewComponent } from './home/new/new.component';

const routes = [
  {
    path: '', component: HomeComponent,
    // children: [
    //   { path: 'products', component: CartComponent },
    //   { path: 'home', component: ProductsComponent },
    // ]
  },
  {path: 'new', component: NewComponent},
  {path: 'products', component: HomeComponent} // not products bc it hides the cart


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
