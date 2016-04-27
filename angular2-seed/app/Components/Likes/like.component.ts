import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'likes',
    template: `
      <div class="like-component"> 
        <span class="glyphicon glyphicon-heart" 
            (click)="onClick()"
            [style.color]="iLike == true ? 'deeppink' : '#ccc'" 
            >
        </span>
        <strong>{{ totalLikes }}</strong>
      </div>
        `,
        styles: [`
            .like-component {
                display: inline;
            }
            .glyphicon {
                font-size: 2em;
            }
            .glyphicon-heart {
                color: #ccc;
                cursor: pointer;
            }
            strong {
                vertical-align: super;
                font-size: 1.2em;
            }
        `]
})
export class LikeComponent { 

    @Input('total-likes') totalLikes: number = 0;  
    @Input() iLike: boolean = false;
    @Output() change = new EventEmitter();
   
    onClick() {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1; 
        this.change.emit({ newValue: this.totalLikes });
    }
}