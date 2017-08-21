import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { ProductsComponent } from './products.component';

@Component({
  selector: 'products-detail',
  templateUrl: './products-detail.component.html', 
  styleUrls: [ './products-detail.component.css' ],
})



export class ProductsDetailComponent implements OnInit { 
  @Input() products: Product[];
  @Input() selections: any;





	constructor(
  private router: Router) {}

	ngOnInit(): void {}
}
