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
    var AutoGrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoGrowDirective = (function () {
                function AutoGrowDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                AutoGrowDirective.prototype.onFocus = function () {
                    // setElementStyle lets us...yes, set the style of the element.
                    // the el.nativeElement provides a refrence to the HTML element of the DOM.
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
                };
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        selector: '[autoGrow]',
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            }());
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});
/**
 * Instead of the above, the creation of the private fields
 * could be done in the old fashion way, like this:
 *
 *  export class AutoGrowDirective {
 *     _el: ElementRef;
 *     _renderer: Renderer;
 *
 *     constructor(el:ElementRef, renderer:Renderer){
 *         this._el = el;
 *         this._renderer = renderer;
 *     }
 *     onFocus() {.....}
 *     onBlur() {.....}
 *  }
 * However, with the keyword 'private' in the constructor params,
 * TypeScript (blessed be thy name) does it all for us.
 *   - hell yeah ;)
*/ 
//# sourceMappingURL=auto-grow.directive.js.map