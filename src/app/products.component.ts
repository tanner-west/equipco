import { Component, OnInit, Directive } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { ProductsTableComponent} from './products-table.component';
import { ProductsGalleryComponent} from './products-gallery.component';
import { ProductsDetailComponent } from './products-detail.component';
import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'main-products',
  templateUrl: './products.component.html', 
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})


export class ProductsComponent implements OnInit { 
	title = 'Equipment';
  selections: any = [];
 	products: Product[];
  selectedProduct: Product;
  activeTab: string;

  onLogSelections(){
    console.log(JSON.stringify(this.selections));
  }

  uncheckSelection(selectionToUncheck: any){
    var key = Object.keys(selectionToUncheck)[0];
    var x: any = document.getElementsByName(key);
    var i;
      for (i = 0; i < x.length; i++) {
        if (x[i].type == "radio") {
          x[i].checked = false;
    }
  } 

  }



  onRemoveSelection(selectionToRemove: any){
    console.log("to remove: " + JSON.stringify(selectionToRemove));
    this.uncheckSelection(selectionToRemove);
    var selections = this.selections;
    selections.forEach(function(selection: any){
      if(JSON.stringify(selection) == JSON.stringify(selectionToRemove)){
        var removeString = JSON.stringify(selectionToRemove);
        var indexInSelections = selections.indexOf(removeString);
        selections.splice(indexInSelections, 1);
      }
    })  
    this.selections = selections;

  }





  //onSelection is fired when the user clicks on a checkbox in sidebar
  onSelection(selection: any){
   var selectionId = selection.target.id;
    var obj = {};
    obj[selection.target.attributes["data-option-label"].value] = selectionId;
    //if target checkbox is checked, the corresponding feature is pushed into "selections" array as object like {"mpn":"1-F-1"}
    if(selection.target.checked){
      for(let i = 0; i<=this.selections.length + 1; i++){
        if (this.selections.length == 0){
          this.selections.push(obj);

          break;
        } else if(this.selections[i] && Object.keys(obj)[0] == Object.keys(this.selections[i])[0]){
          this.selections.splice(i, 1);
          this.selections.push(obj);
          break;
        } else if(JSON.stringify(this.selections[i]) == JSON.stringify(obj)){
          break;
        } else if (i == this.selections.length + 1){
          this.selections.push(obj);
          break;
        } else {
          continue;

        }
      }
    }

    //if target checkbox isn't checked, remove tht feture from selections array
    else if(!selection.target.checked){
      for(let i = 0; i<=this.selections.length; i++){
        if(JSON.stringify(this.selections[i]) == JSON.stringify(obj)){
          this.selections.splice(i, 1);
          break;
    } else {
    }}}
  }

  removeSelection(selection: any){
    console.log("select none");
    for(let i = 0; i<this.selections.length; i++){
      var selectionKey = Object.keys(this.selections[i])[0];
      if(selectionKey == selection.target.name){
        console.log("selection key matches selection target name")
        this.selections.splice(i, 1);
      } 
    }

  }


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
    this.activeTab = "gallery-tab";

  }


  setActiveTab(clickedTab:any){
    this.activeTab = (clickedTab.target.id)
     console.log("Clicked on " + this.activeTab);

  }


}