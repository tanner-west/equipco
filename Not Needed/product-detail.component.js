"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_1 = require("./product");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var product_service_1 = require("./product.service");
require("rxjs/add/operator/switchMap");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route, location) {
        this.productService = productService;
        this.route = route;
        this.location = location;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        /* this.route.params
           .switchMap((params: Params) => this.productService.getProducts(+params['id']))
           .subscribe(product => this.product = product);*/
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ProductDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof product_1.Product !== "undefined" && product_1.Product) === "function" && _a || Object)
], ProductDetailComponent.prototype, "product", void 0);
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: './product-detail.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _b || Object, router_1.ActivatedRoute,
        common_1.Location])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
var _a, _b;
//# sourceMappingURL=product-detail.component.js.map