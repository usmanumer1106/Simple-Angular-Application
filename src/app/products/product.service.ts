import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./product";
import { catchError,map,tap } from "rxjs/operators";


@Injectable(
 {
     providedIn:'root'
 }
   
)
export class ProductService{
  [x: string]: any;
  private productUrl= 'api/products/products.json'
  constructor(private http:HttpClient){    
  }
    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data=> console.log('All:', JSON.stringify(data))),
          catchError(this.handelError)
        );
    }
    getProduct(id: number): Observable<IProduct | undefined> {
      return this.getProducts()
        .pipe(
          map((products: IProduct[]) => products.find(p => p.productId === id))
        );
    }
    private handelError(err:HttpErrorResponse){
      let errorMessage='';
      if(err.error instanceof ErrorEvent){
        errorMessage='${err.error.message}';
      }
      else{
errorMessage="return code"
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
    
}