
import { NgModule }      from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';
import { DashboardComponent} from './dashboard.component';


const routes = [
		{
			path: 'products',
			component: ProductsComponent
			},
		{
			path: 'dashboard',
			component: DashboardComponent
		},
		{
			path: '',
			redirectTo: '/dashboard',
			pathMatch: 'full'
		},
		{
			path: 'detail/:id',
			component: ProductDetailComponent
		}
	];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
 	 exports: [ RouterModule ]
})

export class AppRoutingModule {}
