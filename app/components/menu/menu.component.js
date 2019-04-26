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
var menu_service_1 = require("./menu.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var MenuComponent = (function () {
    function MenuComponent(_menuService) {
        this._menuService = _menuService;
        this.smoothiesActive = false;
        this.juicesActive = false;
        this.shotsActive = false;
        this.spikesActive = false;
        this.drinksActive = false;
        this.foodActive = false;
        this.item = null;
        this.isLoading = new BehaviorSubject_1.BehaviorSubject(true);
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.getMenu();
        this.isLoading.value;
    };
    MenuComponent.prototype.toggleSmoothies = function () {
        this.smoothiesActive = !this.smoothiesActive;
    };
    MenuComponent.prototype.toggleJuices = function () {
        this.juicesActive = !this.juicesActive;
    };
    MenuComponent.prototype.toggleShots = function () {
        this.shotsActive = !this.shotsActive;
    };
    MenuComponent.prototype.toggleSpikes = function () {
        this.spikesActive = !this.spikesActive;
    };
    MenuComponent.prototype.toggleDrinks = function () {
        this.drinksActive = !this.drinksActive;
    };
    MenuComponent.prototype.toggleFood = function () {
        this.foodActive = !this.foodActive;
    };
    MenuComponent.prototype.getMenu = function () {
        var _this = this;
        this._menuService.getMenu()
            .then(function () {
            return _this.item = _this._menuService.menu;
        }).then(function () {
            console.log(_this.item.smoothies);
        }).then(function () { return _this.isLoading.next(false); }).then(function () { return console.log(_this.isLoading.value); });
    };
    ;
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'djb-menu',
        templateUrl: 'menu.component.html',
        providers: [menu_service_1.MenuService]
    }),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map