import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { ProductsComponent } from './products.component';

@Component({
  selector: 'products-gallery',
  templateUrl: './products-gallery.component.html', 
  styleUrls: [ './products-gallery.component.css' ],
})



export class ProductsGalleryComponent implements OnInit { 
  @Input() products: any;
  @Input() selections: any;



	constructor(
  private router: Router) {}

	ngOnInit(): void {}
}


