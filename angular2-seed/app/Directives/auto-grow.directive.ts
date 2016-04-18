import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    
    constructor(private el: ElementRef, private renderer: Renderer) {
    }    

    onFocus() {
        // setElementStyle lets us...yes, set the style of the element.
        // the el.nativeElement provides a refrence to the HTML element of the DOM.
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
    }
    
    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
    }
}

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