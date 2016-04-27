System.register(['angular2/core', './Services/tweet.service'], function(exports_1, context_1) {
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
    var core_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.title = "Tweets";
                    this.tweets = tweetService.getAllTweets();
                }
                TweetComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweetFeed',
                        template: "\n    <h2>{{ title }}</h2>\n    <div class=\"tweetContainer\">\n        <article class=\"media\" *ngFor=\"#tweet of tweets\">\n            <div class=\"media-left\">\n                <a [href]=\"tweet.link\" class=\"img-rounded\">\n                    <img class=\"media-object\" [src]=\"tweet.img\" [alt]=\"tweet.title\" />\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">\n                    {{ tweet.title }} \n                    <small class=\"text-muted\">\n                        {{ tweet.user }}\n                    </small>    \n                </h4>\n                <p>{{ tweet.text }}</p>\n            </div>\n        </article>\n    </div>\n    ",
                        styles: ["\n        .media {\n            border: 1px solid #bbb;\n            background-color: #eee;\n            padding: 15px;\n            margin: 15px;\n        }\n        .media:hover {\n            box-shadow: 1px 1px 1px rgba(60,60,60,0.5);\n        }\n    "],
                        providers: [tweet_service_1.TweetService, TweetComponent]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map