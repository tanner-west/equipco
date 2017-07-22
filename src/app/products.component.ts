import { Component, OnInit, Directive } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { ProductsTableComponent} from './products-table.component';

@Component({
  selector: 'main-products',
  templateUrl: './products.component.html', 
  providers: [ProductService]
})

export class ProductsComponent implements OnInit { 
	title = 'Equipment';

	products: Product[];
	selectedProduct: Product;

	constructor(
  private router: Router,
  private productService: ProductService) {}

	getProducts(): void {
		this.productService
    .getProducts()
    .subscribe(res => {
      this.products = res;
    });
	}

	ngOnInit(): void {
    this.getProducts();
  }
	onSelect(product: Product): void {
  		this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.name])
  }
}