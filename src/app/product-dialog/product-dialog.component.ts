import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../interfaces/product_description.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {
  productName:string = '';
  productSpecification:string = '';
  productPrice:number = 0;
  nameValidationError:boolean = false;
  specificationValidationError:boolean = false;
  priceValidationError:boolean = false;


  constructor(private matDialog:MatDialog, private dataService:DataService) { }

  ngOnInit(): void {
  }
  
  closeDialog(){
    this.matDialog.closeAll();
  }

  formValidations(product:Product){
    let correct:boolean = true;

    if (product.productName == '' || product.productSpecification == '' || product.productPrice < 0) {
      if (product.productName == ''){
        this.nameValidationError = true;
      }
      if (product.productSpecification == ''){
        this.specificationValidationError = true;
      }
      if (product.productPrice < 0){
        this.priceValidationError = true;
      }      
      correct = false;
    }
    return correct;
  }
  
  saveData(){
    let productAdd = new Product(this.productName, this.productSpecification, this.productPrice);
    let correct = this.formValidations(productAdd);

    if (correct) {
      this.dataService.createProduct(productAdd)
      .subscribe(
        product => console.log(product),
        error => console.log(error)
      )
      this.matDialog.closeAll();
      correct = true;
    }
  }

}
