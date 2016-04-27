import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: ` 
        <span class="glyphicon" 
            [class.glyphicon-star]="isFavorite" 
            [class.glyphicon-star-empty]="!isFavorite" 
            (click)="onClick()" 
            >
        </span>
        `,
        styles: [`
            .glyphicon {
                font-size: 2em;
                cursor: pointer;
            }
            .glyphicon-star {
                color: #6eb5e5
            }
            .glyphicon-star-empty {
                color: #ccc
            } 
        `]
         // template: when small (like this) keep it in-line like the above because:
            // 1: It saves an http request on load.
            // 2: It makes the component self-containing, and easier to move to be used ion another application
          // styles: same issue as the template
          // styleUrls: same as above
        //inputs: ['isFavorite'] // This assumes that the component have a property called "isFavorite",'
        // can be used instead of the Input decorator - and the same goes for output
})
export class FavoritesComponent { 
    //@Input() isFavorite = false;  // @Input anotes the Decorator pattern, making isFavorite an input
    // Allowing data to enter the application through this component
   
    // @Input('some-name') lets us set a custom name, that we can use in the 
    // public API (i.e. in the app.component), like this:
    //  <favorite [some-name]></favorite>
    @Input('is-favorite') isFavorite = false;  
   
    @Output() change = new EventEmitter(); // The EventEmitter allows us to create events
   
    onClick() {
        this.isFavorite = !this.isFavorite;
        
        /**
         * To create events:
         * 1: import the Output object and the EventEmitter
         * 2: create a new instance of the EventEmitter making it an Output
         */
        this.change.emit({ newValue: this.isFavorite });
    }
}