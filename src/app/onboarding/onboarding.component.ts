import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product_description.model';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  //product1 = new Product('Adidas', 'Adidas Superstar', 100);

  constructor(public dataService: DataService, private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(){
    this.dataService.getProduct()
      .subscribe( 
        productList => console.log(productList),
        error => console.log(error))
  }
  
  createProduct(product:Product){
    this.dataService.createProduct(product)
      .subscribe(
        product => console.log(product),
        error => console.log(error)
      )
  }

  openCreateProduct(){
    this.matDialog.open(ProductDialogComponent);
  }
}
