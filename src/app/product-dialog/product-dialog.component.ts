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

  constructor(private matDialog:MatDialog, private dataService:DataService) { }

  ngOnInit(): void {
  }
  
  closeDialog(){
    this.matDialog.closeAll();
  }

  formValidations(product:Product){
    var correct = true;
    if (product.productName==''){
      this.nameValidationError = true;
      correct = false;
    }
    return correct;
  }
  saveData(){
    var productAdd = new Product(this.productName, this.productSpecification, this.productPrice);
    var correct = this.formValidations(productAdd);
    if(correct)
    {
      this.dataService.createProduct(productAdd)
      .subscribe(
        product => console.log(product),
        error => console.log(error)
      )
    }
  }
}
