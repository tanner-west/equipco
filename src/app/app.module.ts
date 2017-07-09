import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppRoutingModule } from './app-routing.module';


import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { AppComponent }  from './app.component';
import { DashboardComponent} from './dashboard.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    AppRoutingModule
  	],
  declarations: [ 
  	AppComponent,
  	ProductDetailComponent,
  	ProductsComponent,
  	DashboardComponent
   ],
  providers: [
  	ProductService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }