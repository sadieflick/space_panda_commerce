import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  errorMessages = [];
  errorAlreadyExists = "";

  onSubmit(myForm) {
    var newProduct = myForm.value;
    let observable = this._httpService.addNewProduct(this.newPet);
    observable.subscribe(data => {
      console.log("in Create observable, data: ", data);
      if(data["error"]) {
        this.errorMessages = data["error"]["errors"];
        console.log("In if in observable create, errormessages: ", this.errorMessages);
      }
      else {
        console.log("No error data: ",data);
        if(data["status"] == false) {
          this.errorAlreadyExists = data["message"];
          return;
        }
        this.redirectHome();
      }
    })
  }

  redirectHome() {
    this.router.navigate(['/']);
  }

}
