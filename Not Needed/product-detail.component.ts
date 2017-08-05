import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from './product.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
	@Input() product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
    ) {}
  ngOnInit(): void {
 /* this.route.params
    .switchMap((params: Params) => this.productService.getProducts(+params['id']))
    .subscribe(product => this.product = product);*/

  }
  goBack(): void {
    this.location.back();
  }
}
