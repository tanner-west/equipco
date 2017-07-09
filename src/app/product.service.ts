import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './product';
import { PRODUCTS } from './mock-product';

@Injectable()
export class ProductService {
	private productsUrl = "http://appalcorps.com/wp/wp-json/wp/v2/equipco_product";

	constructor(private http: Http) { }

	getProducts(): Observable<Product[]> {

    return this.http
      .get(this.productsUrl)
      .map((res: Response) => res.json());

}
}



