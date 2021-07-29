import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './produt-list.component';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { PrductDetailComponent } from './prduct-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
  
    ProductListComponent,
    PrductDetailComponent, 
    ConvertToSpacePipe 
  ],
  imports: [
    CommonModule,
   
    RouterModule.forChild([
      {   path: 'products', component:ProductListComponent},
        {
          path: 'products/:id',
          canActivate:[ProductDetailGuard],
           component:PrductDetailComponent
        }
      
    ]),
    SharedModule
  ]
})
export class ProductModule { }
