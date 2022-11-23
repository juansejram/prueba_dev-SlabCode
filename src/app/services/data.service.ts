import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product_description.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  //Get all product descriptions
  getProduct() : Observable<Product[]>{
   return this.httpClient.get<Product[]>('https://pruebadevslabcode-default-rtdb.firebaseio.com/products.json');
  }

  createProduct(product:Product){
    return this.httpClient.post<Product>('https://pruebadevslabcode-default-rtdb.firebaseio.com/products.json', product)
  }
}