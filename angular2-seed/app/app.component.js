System.register(['angular2/core', './Courses/course.component', './Authors/author.component', './Components/Favorites/favorites.component', './Components/Likes/like.component', './Components/Votes/votes.component'], function(exports_1, context_1) {
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
    var core_1, course_component_1, author_component_1, favorites_component_1, like_component_1, votes_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (favorites_component_1_1) {
                favorites_component_1 = favorites_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (votes_component_1_1) {
                votes_component_1 = votes_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.tweet = {
                        title: "Title",
                        totals: 0
                    };
                    this.votes = {
                        currentVotes: 9
                    };
                }
                AppComponent.prototype.onVoteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onLikesChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>My First Angular 2 App</h1>\n        <favorite \n            [is-favorite]=\"post.isFavorite\" \n            (change)=\"onFavoriteChange($event)\">\n        </favorite> \n        \n        <likes \n            [total-likes]=\"tweet.totals\" \n            (change)=\"onLikesChange($event)\">\n        </likes>\n        \n        <voteComponent \n            [currentVotes]=\"votes.currentVotes\"\n            (change)=\"onVoteChange($event)\">\n        </voteComponent>\n        \n        <courses></courses>\n        \n        <authors></authors>\n        ",
                        directives: [course_component_1.CoursesComponent, author_component_1.AuthorComponent, favorites_component_1.FavoritesComponent, like_component_1.LikeComponent, votes_component_1.VoteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map