export class TweetService {
    getAllTweets(){
        return [
            {
                link:   "http://google.com",
                img:    "http://lorempixel.com/100/100/people?1",
                title:  "Winward",
                user:   "@winwardstudios",
                text:   "Lorem ipsum dolor sit amed",
                likes:  "0",
                iLike:  "0"
            },
            {
                link:   "http://google.com",
                img:    "http://lorempixel.com/100/100/people?2",
                title:  "AngularJS News",
                user:   "@angularjs_news",
                text:   "Lorem ipsum dolor sit amed",
                likes:  "5",
                iLike:  "1"
            },
            {
                link:   "http://google.com",
                img:    "http://lorempixel.com/100/100/people?3",
                title:  "UX & Bootstrap",
                user:   "@3rdwave",
                text:   "Lorem ipsum dolor sit amed",
                likes:  "0",
                iLike:  "0"
            },
        ]
    }
}