import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.componest';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
   TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'welcome', component:WelcomeComponent
      },
      {
        path: 'test', component:TestComponent
      },
      {
        path: '', redirectTo: 'welcome', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'welcome', pathMatch: 'full'
      }

    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
