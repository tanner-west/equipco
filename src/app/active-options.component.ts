import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { ProductsComponent } from './products.component';

@Component({
  selector: 'active-options',
  templateUrl: './active-options.component.html', 
  styleUrls: [ './active-options.component.css' ],
})



export class ActiveOptionsComponent implements OnInit { 
  @Input() products: any;
  @Input() selections: any;
  @Output() onRemoveSelection = new EventEmitter<any>();

removeSelection($event: any, selection: any){
	this.onRemoveSelection.emit(selection);
	console.log($event.target);
	console.log(selection);
}
 stringify(option: any){
 	var key = Object.keys(option)[0];
 	var value = option[key];
 	var optionString = key.toUpperCase() + " of " + value;

 	return optionString;

 }
constructor(
  private router: Router) {}

	ngOnInit(): void {}
}


