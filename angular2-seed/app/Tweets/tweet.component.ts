import {Component} from 'angular2/core'
import {TweetService} from './Services/tweet.service'; 
import {FavoritesComponent} from './../Components/Favorites/favorites.component'

@Component({
    selector: 'tweetFeed',
    template:  `
    <h2>{{ title }}</h2>
    <div class="tweetContainer">
        <article class="media" *ngFor="#tweet of tweets">
            <div class="media-left">
                <a [href]="tweet.link" class="img-rounded">
                    <img class="media-object" [src]="tweet.img" [alt]="tweet.title" />
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ tweet.title }} 
                    <small class="text-muted">
                        {{ tweet.user }}
                    </small>    
                </h4>
                <p>{{ tweet.text }}</p>
            </div>
        </article>
    </div>
    `,
    styles: [`
        .media {
            border: 1px solid #bbb;
            background-color: #eee;
            padding: 15px;
            margin: 15px;
        }
        .media:hover {
            box-shadow: 1px 1px 1px rgba(60,60,60,0.5);
        }
    `],
    providers: [TweetService, TweetComponent]
})
export class TweetComponent {
    
    title: string = "Tweets";
    tweets;
    
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getAllTweets();
    } 
    
}