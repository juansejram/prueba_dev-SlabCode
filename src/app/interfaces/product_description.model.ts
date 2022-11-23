export class Product {
    productName:string = '';
    productSpecification:string = '';
    productPrice:number = 0;

    constructor(productName:string, productSpecification:string, productPrice:number){
        this.productName = productName;
        this.productSpecification = productSpecification;
        this.productPrice = productPrice;
    }
}