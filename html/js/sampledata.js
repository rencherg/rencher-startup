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
    }
]}

let samplePostData = {
    "posts":[
    {
        "user":"rencherg",
        "message":"testYo this is my sample message Dread Pirate Roberts is so cool even though Gemini doesn't think so",
        "id":1,
        "comments": [
            {
                "user":"rencherg",
                "message":"Dang that's crazy!",
                "subcomments":[
                    {
                        "user":"rencherg",
                        "message":"I guess so I mean he didn't even say what happened",
                        "subcomments":[]
                    },
                    {
                        "user":"rencherg",
                        "message":"Everyone has a story",
                        "subcomments":[
                            {
                                "user":"rencherg",
                                "message":"The indent means that this comment is replying to the one above it",
                                "subcomments":[]
                            }
                        ]
                    }
                ]
            },
            {
                "user":"rencherg",
                "message":"It's a busy world huh",
                "subcomments":[]
            },
            {
                "user":"rencherg",
                "message":"This is another comment",
                "subcomments":[]
            }
        ]
    },
    {
        "user":"fmulder",
        "message":"Woah dude I don't know what you saw. Maybe it was Desert Storm 2.",
        "id":2,
        "comments": [
            {
                "user":"rencherg",
                "message":"Dang that's crazy!",
                "subcomments":[
                    {
                        "user":"rencherg",
                        "message":"I guess so I mean he didn't even say what happened",
                        "subcomments":[]
                    },
                    {
                        "user":"rencherg",
                        "message":"Everyone has a story",
                        "subcomments":[
                            {
                                "user":"rencherg",
                                "message":"The indent means that this comment is replying to the one above it",
                                "subcomments":[]
                            }
                        ]
                    }
                ]
            },
            {
                "user":"rencherg",
                "message":"It's a busy world huh",
                "subcomments":[]
            },
            {
                "user":"rencherg",
                "message":"This is another comment",
                "subcomments":[]
            }
        ]
    }
],
}

if (!localStorage.getItem("dataLoaded")){
    localStorage.setItem("samplePostData", JSON.stringify(samplePostData));
    localStorage.setItem("sampleUsers", JSON.stringify(sampleUsers));
    localStorage.setItem("dataLoaded", true);   
}
