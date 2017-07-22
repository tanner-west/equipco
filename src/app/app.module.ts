import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppRoutingModule } from './app-routing.module';

import { ProductsTableComponent } from './products-table.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    AppRoutingModule
  	],
  declarations: [ 
  	AppComponent,
  	ProductsComponent,
    ProductsTableComponent
   ],
  providers: [
  	ProductService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }