import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  subject = new BehaviorSubject(null);

  updateCart(products: Array<any>){
    this.subject.next(products);
  }

  addNewProduct(newProduct) {
    return this._http.post('/api/products', newProduct);
  }

  getProducts(){

    return this._http.get('/api/products');

  }

  getProductByID(product_id){

    console.log("In service, product id passed: ", product_id)
    return this._http.get('/api/products/' + product_id);

  }
}
