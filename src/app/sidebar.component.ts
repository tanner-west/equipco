import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { ProductsComponent } from './products.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html', 
  styleUrls: [ './sidebar.component.css' ],
})



export class SidebarComponent implements OnInit { 
@Input() products: any[];
@Output() onSelection = new EventEmitter<any>();
@Output() removeSelection = new EventEmitter<any>();

selectNone(selection: any){
	
	this.removeSelection.emit(selection);
}

makeSelection(selection: any){
	
	this.onSelection.emit(selection);
}

  logProducts(): void {
     console.log(JSON.stringify(this.products));

  }

constructor(
  private router: Router) {}

	ngOnInit(): void {}

}




