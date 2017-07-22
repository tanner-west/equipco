import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'products-view',
  templateUrl: './products-table.component.html', 
  styleUrls: [ './products-table.component.css' ],
})

export class ProductsTableComponent implements OnInit { 

	products: Product[];

	constructor(
  private router: Router) {}

	ngOnInit(): void {}
}
