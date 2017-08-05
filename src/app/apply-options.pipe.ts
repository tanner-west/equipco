import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'applyOptions',
		pure: false})
export class ApplyOptionsPipe implements PipeTransform {
  transform(products: any, options: string[]): any {



if(options.length == 0){
	return products;
}  else {	
  	var results: any = [];
  	//look at the features that have been passed as "options" and build an array of products that have those options
	/*options.forEach(function(option){
		products.forEach(function(product: any){
			var optionKey = Object.keys(option)[0];
			//if product has property of "volume" and product.volume == option.volume, then push that product into the results array
			if(product.hasOwnProperty(optionKey) && product[optionKey] == option[optionKey]){

				results.push(product);
        }
    })
})*/
products.forEach(function(product: any){
for(let i=0; i<options.length + 1; i++){
	if(i == options.length){
		results.push(product);
	} else { 
		var optionKey = Object.keys(options[i])[0];
		if(optionKey && product.acf.hasOwnProperty(optionKey) && product.acf[optionKey] == options[i][optionKey]) {
			continue;
			} else {
			break;
	}
}
	}})

		


return results;
}}}

