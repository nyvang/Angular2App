import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'voteComponent',
    template: `
    <div class="voteComponent">
        <div class="voteBox">
            <span class="glyphicon glyphicon-menu-up voteButton"  
                [class.highlighted]="myVote == 1"
                (click)="upVote()">
            </span>
            
            <span class="currentVotes">
                {{ currentVotes + myVote}}
            </span>
            
            <span class="glyphicon glyphicon-menu-down voteButton"
                [class.highlighted]="myVote == -1"
                (click)="downVote()">
            </span>            
        </div>
    </div>  
    `,
    styles: [`
        .voteComponent {
            display: inline;
            text-align: center;
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
        .voteButton {
            cursor: pointer;
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
    
    
    upVote() {
        if(this.myVote == 1) {
            return;
        }
        this.myVote++;

        this.change.emit({ myVote: this.myVote });
    }
    
    downVote() {
        if(this.myVote == -1) {
            return;
        }
        this.myVote--;

        this.change.emit({ myVote: this.myVote }); 
    }
}