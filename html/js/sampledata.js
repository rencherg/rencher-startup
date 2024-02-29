let sampleUsers = {
    "userlist":[
    {
        "username":"rencherg",
        "password":"password",
        "zipcode":84003,
        "lat/long":"<latlong here>"
    },
    {
        "username":"foxmulder",
        "password":"password",
        "zipcode":20535,
        "lat/long":"<latlong here>"
    },
    {
        "username":"dscully",
        "password":"password",
        "zipcode":20535,
        "lat/long":"<latlong here>"
    },
    {
        "username":"test",
        "password":"test",
        "zipcode":98765,
        "lat/long":"<latlong here>"
    }
]}

let samplePostData = {
    "posts":[
    {
        "user":"rencherg",
        "message":"testYo this is my sample message Dread Pirate Roberts is so cool even though Gemini doesn't think so",
        "id":1,
        "comment_id":8,
        "comments": [
            {
                "user":"rencherg",
                "message":"Dang that's crazy!",
                "id":4,
                "subcomments":[
                    {
                        "user":"rencherg",
                        "message":"I guess so I mean he didn't even say what happened",
                        "id":5,
                        "subcomments":[]
                    },
                    {
                        "user":"rencherg",
                        "message":"Everyone has a story",
                        "id":6,
                        "subcomments":[
                            {
                                "user":"rencherg",
                                "message":"The indent means that this comment is replying to the one above it",
                                "id":7,
                                "subcomments":[]
                            }
                        ]
                    }
                ]
            },
            {
                "user":"rencherg",
                "message":"It's a busy world huh",
                "id":2,
                "subcomments":[]
            },
            {
                "user":"rencherg",
                "message":"This is another comment",
                "id":3,
                "subcomments":[]
            },
            {
                "user":"rencherg",
                "message":"Dude have you ever seen Shrek in Spanish?!",
                "id":1,
                "subcomments":[]
            }
        ]
    },
    {
        "user":"fmulder",
        "message":"Woah dude I don't know what you saw. Maybe it was Desert Storm 2.",
        "id":2,
        "comment_id":8,
        "comments": [
            {
                "user":"rencherg",
                "message":"Dang that's crazy!",
                "id":4,
                "subcomments":[
                    {
                        "user":"rencherg",
                        "message":"I guess so I mean he didn't even say what happened",
                        "id":5,
                        "subcomments":[]
                    },
                    {
                        "user":"rencherg",
                        "message":"Everyone has a story",
                        "id":6,
                        "subcomments":[
                            {
                                "user":"rencherg",
                                "message":"The indent means that this comment is replying to the one above it",
                                "id":7,
                                "subcomments":[]
                            }
                        ]
                    }
                ]
            },
            {
                "user":"rencherg",
                "message":"It's a busy world huh",
                "id":2,
                "subcomments":[]
            },
            {
                "user":"rencherg",
                "message":"This is another comment",
                "id":3,
                "subcomments":[]
            },
            {
                "user":"rencherg",
                "message":"Dude have you ever seen Shrek in Spanish?!",
                "id":1,
                "subcomments":[]
            }
        ]
    }
],
}

let sampleWebsocketData = {
    "data":[
        "comment", "comment2", "more sample comments", "another", "ok", "Dude have you ever watched Shrek in Spanish?"
    ]
}

if (!localStorage.getItem("dataLoaded")){
    localStorage.setItem("samplePostData", JSON.stringify(samplePostData));
    localStorage.setItem("sampleUsers", JSON.stringify(sampleUsers));
    localStorage.setItem("dataLoaded", true);
    localStorage.setItem("sampleWebsocketData", JSON.stringify(sampleWebsocketData));
}
