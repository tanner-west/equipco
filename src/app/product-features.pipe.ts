import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productFeatures'})
export class ProductFeaturesPipe implements PipeTransform {
  transform(products: any, choices: string[]): any {
  	var list: any[] = [];
  	//find the products that have properties matching those in the "choices" array and pushes them, as objects, into array "list"
	products.forEach(function(element:any){
		for (let i=0; i<=choices.length;i++){

    		if (element.acf.hasOwnProperty(choices[i])){
			var key = choices[i];
			var value = element.acf[choices[i]];
			var obj = {};
			obj[key] = value;
			list.push(obj);
}
}
})
	var shortList: any =[];
	//consolodates the product properties in array "list" into objects that look like {"label":"popertyName", "values":["1","3","12"]}
	list.forEach(function(longListElement){
		var longListElementFirstKey = Object.keys(longListElement)[0];
		if (shortList.length === 0) {
			var obj = {};
			obj["label"] = longListElementFirstKey;
  			obj["values"] =[longListElement[longListElementFirstKey]];
			shortList.push(obj); }
		else {
			for(let i=0;i<=shortList.length + 1;i++){
			if(shortList[i] && shortList[i].label == longListElementFirstKey){
				if(shortList[i].values.includes(longListElement[longListElementFirstKey])){
					break;
				} else {
					shortList[i].values.push(longListElement[longListElementFirstKey]);
					break; }
			}
		else if (i == shortList.length + 1) {
			var obj = {};
  			obj["label"] = longListElementFirstKey;
   			obj["values"] =[longListElement[longListElementFirstKey]];
			shortList.push(obj);
			break;}
			else {
			continue;}
}
    } }) 
    return shortList;
}}