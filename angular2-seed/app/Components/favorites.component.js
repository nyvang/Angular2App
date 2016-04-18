System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FavoritesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoritesComponent = (function () {
                function FavoritesComponent() {
                    //@Input() isFavorite = false;  // @Input anotes the Decorator pattern, making isFavorite an input
                    // Allowing data to enter the application through this component
                    // @Input('some-name') lets us set a custom name, that we can use in the 
                    // public API (i.e. in the app.component), like this:
                    //  <favorite [some-name]></favorite>
                    this.isFavorite = false;
                    this.change = new core_1.EventEmitter(); // The EventEmitter allows us to create events
                }
                FavoritesComponent.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                    /**
                     * To create events:
                     * 1: import the Output object and the EventEmitter
                     * 2: create a new instance of the EventEmitter making it an Output
                     */
                    this.change.emit({ newValue: this.isFavorite });
                };
                __decorate([
                    core_1.Input('is-favorite'), 
                    __metadata('design:type', Object)
                ], FavoritesComponent.prototype, "isFavorite", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavoritesComponent.prototype, "change", void 0);
                FavoritesComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        template: " \n        <span class=\"glyphicon\" \n            [class.glyphicon-star]=\"isFavorite\" \n            [class.glyphicon-star-empty]=\"!isFavorite\" \n            (click)=\"onClick()\" \n            >\n        </span>\n        ",
                        styles: ["\n            .glyphicon {\n                font-size: 2em;\n                cursor: pointer;\n            }\n            .glyphicon-star {\n                color: #6eb5e5\n            }\n            .glyphicon-star-empty {\n                color: #ccc\n            } \n        "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoritesComponent);
                return FavoritesComponent;
            }());
            exports_1("FavoritesComponent", FavoritesComponent);
        }
    }
});
//# sourceMappingURL=favorites.component.js.map