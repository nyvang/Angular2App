import {Component}          from 'angular2/core';
import {CoursesComponent}   from './Courses/course.component';
import {AuthorComponent}    from './Authors/author.component';
import {FavoritesComponent} from './Components/Favorites/favorites.component';
import {LikeComponent}      from './Components/Likes/like.component';
import {VoteComponent}      from './Components/Votes/votes.component';
import {TweetComponent}      from './Tweets/tweet.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <favorite 
            [is-favorite]="post.isFavorite" 
            (change)="onFavoriteChange($event)">
        </favorite> 
        
        <likes 
            [total-likes]="tweet.totals" 
            (change)="onLikesChange($event)">
        </likes>
        
        <voteComponent 
            [currentVotes]="votes.currentVotes"
            (change)="onVoteChange($event)">
        </voteComponent>
        
        <courses></courses>
        
        <authors></authors>
        
        <tweetFeed></tweetFeed>
        `,
    directives: [CoursesComponent, AuthorComponent, FavoritesComponent, LikeComponent, VoteComponent, TweetComponent]
})
export class AppComponent { 
    post = {
        title: "Title",
        isFavorite: true
    }
    tweet = {
        title: "Title",
        totals: 0
    }
    votes = {
        currentVotes: 9
    }
    
    onVoteChange($event) {
        console.log($event)
    }
    
    onLikesChange($event) {
        console.log($event)
    }
    
    onFavoriteChange($event) {
        console.log($event);
    }
}