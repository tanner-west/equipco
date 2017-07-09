import { Component } from '@angular/core';


@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
				<my-products></my-products>







				<!--<nav>
					<a routerLink="/products">Products</a>
					<a routerLink="/dashboard">Dashboard</a>
				</nav>
				<router-outlet></router-outlet>
				-->

				`
})

export class AppComponent {
	title = "Equipco";

}