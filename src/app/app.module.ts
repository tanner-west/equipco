import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';

import { ProductsTableComponent } from './products-table.component';
import { ProductsGalleryComponent } from './products-gallery.component';
import { ProductsDetailComponent} from './products-detail.component';
import { ProductsComponent } from './products.component';
import { SidebarComponent } from './sidebar.component';
import { ActiveOptionsComponent } from './active-options.component';
import { ProductService } from './product.service';
import { AppComponent }  from './app.component';
import { ActiveProductViewDirective } from './activeProductView.directive';
import { ProductFeaturesPipe } from './product-features.pipe';
import { FeatureDirective } from './feature.directive';
import { ApplyOptionsPipe } from './apply-options.pipe';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
       path: 'products', 
       component: ProductsComponent,
       children: [
         {path: 'gallery-view',
         component: ProductsGalleryComponent }]
       }
     
     ])
  	],
  declarations: [ 
  	AppComponent,
  	ProductsComponent,
    ProductsTableComponent,
    ProductsGalleryComponent,
    ActiveOptionsComponent,
    ActiveProductViewDirective,
    ProductsDetailComponent,
    SidebarComponent,
    ProductFeaturesPipe,
    FeatureDirective,
    ApplyOptionsPipe
   ],
  providers: [
  	ProductService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }