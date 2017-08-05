import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[ecActiveProductView]'})

export class ActiveProductViewDirective {
	constructor(el: ElementRef) {
		el.nativeElement.style.display = 'none';
	}
}