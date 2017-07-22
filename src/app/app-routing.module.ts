
import { NgModule }      from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';


const routes = [
		{
			path: 'products',
			component: ProductsComponent
			},
	];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
 	 exports: [ RouterModule ]
})

export class AppRoutingModule {}
