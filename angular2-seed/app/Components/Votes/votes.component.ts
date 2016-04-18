import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'voteComponent',
    template: `
    <div class="voteComponent">
        <div class="voteBox">
            <span class="glyphicon glyphicon-menu-up" 
            [class.highlighted]="myVote > 0"
            (click)="upVote()"></span>
            <span class="currentVotes">{{ currentVotes }}</span>
            <span class="glyphicon glyphicon-menu-down"
            [class.highlighted]="myVote < 0"
            (click)="downVote()"></span>            
        </div>
    </div>  
    `,
    styles: [`
        .voteComponent {
            display: inline;
        }
        .voteBox {
            width: 20px;
        }
        .glyphicon {
            font-size: 2em;
        }
        .currentVotes {
            font-size: 1.5em;
   
        }
        .highlighted {
            color: yellow;
        }
     `]
})
export class VoteComponent {

    @Input() currentVotes: number = 0;  
    myVote: number = 0;
    @Output() change = new EventEmitter();
    highLights = true;
    downVote() {
        this.myVote = -1;
        this.currentVotes = this.currentVotes-1;
        this.change.emit({ newValue: this.currentVotes });
    }
    
    upVote() {
       this.myVote = +1;
       this.currentVotes = this.currentVotes+1;
       this.change.emit({ newValue: this.currentVotes });
        
    }
}