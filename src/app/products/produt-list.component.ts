import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-abc',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnDestroy, OnInit{
  constructor(private productService: ProductService){

  }

  
  pageTitle="Product Page";
    imageWidth=50;
    imageMargin=2;
    showImage:boolean=false;
    errorMessage='';
    sub!: Subscription;
    private _listFilter: string='';

    get listFilter():string{
     return this._listFilter; 
    }
    set listFilter(value:string){
      this._listFilter=value;
      this.filterProducts=this.performFilter(value);
    }
    filterProducts:IProduct[]=[]; 
    products: IProduct[]=[];
      performFilter(filterBy:string):IProduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().includes(filterBy))
      }
      toggleImage():void{
          this.showImage=!this.showImage;
      }
      ngOnInit():void{
     this.sub=this.productService.getProducts().subscribe({
      next:products=> {
        this.products=products;
        this.filterProducts=this.products;
      },
      error:err=>this.errorMessage=err
    });
         
      }
      onRatingClicked(message:string):void{
        this.pageTitle='Product Rating:'+message;
      }
      ngOnDestroy(): void {
    this.sub.unsubscribe(); 
      }
}