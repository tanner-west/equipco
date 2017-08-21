import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { ProductsComponent } from './products.component';

@Component({
  selector: 'products-view',
  templateUrl: './products-table.component.html', 
  styleUrls: [ './products-table.component.css' ],
})



export class ProductsTableComponent implements OnInit { 
@Input() products: Product[];
@Input() selections: any;




constructor(
  private router: Router) {}

	ngOnInit(): void {}
}


