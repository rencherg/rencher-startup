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
        "zipcode":84003,
        "lat/long":"<latlong here>"
    }
]}

let samplePostData = {
    "posts":[
    {
        "user":"rencherg",
        "message":"This is my sample post, click on me or any comment to make a comment",
        "id":1,
        "comment_id":13,
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
                            },
                            {
                                "user":"rencherg",
                                "message":"Another comment",
                                "id":8,
                                "subcomments":[]
                            },
                            {
                                "user":"rencherg",
                                "message":"Another comment",
                                "id":9,
                                "subcomments":[
                                    {
                                        "user":"rencherg",
                                        "message":"Another comment",
                                        "id":10,
                                        "subcomments":[
                                            {
                                                "user":"rencherg",
                                                "message":"Another comment",
                                                "id":11,
                                                "subcomments":[
                                                    {
                                                        "user":"rencherg",
                                                        "message":"Another comment",
                                                        "id":12,
                                                        "subcomments":[]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
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
                "message":"Another comment",
                "id":1,
                "subcomments":[]
            }
        ]
    },
    {
        "user":"test",
        "message":"Test data Test data Test data Test data Test data Test data",
        "id":2,
        "comment_id":2,
        "comments": [
            {
                "user":"rencherg",
                "message":"Test data",
                "id":1,
                "subcomments":[]
            }
        ],
    }
]}

let sampleWebsocketData = {
    "data":[
        "comment", "comment2", "more sample comments", "another", "ok", "Another sample comment"
    ]
}

if (!localStorage.getItem("dataLoaded")){
    // localStorage.setItem("samplePostData2", JSON.stringify(samplePostData));
    // localStorage.setItem("sampleUsers", JSON.stringify(sampleUsers));
    // localStorage.setItem("dataLoaded", true);
    // localStorage.setItem("sampleWebsocketData", JSON.stringify(sampleWebsocketData));
    // Make the POST request
    fetch('/data', {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json()
    }).then(responseData => {
        localStorage.setItem("samplePostData", JSON.stringify(responseData.samplePostData));
        localStorage.setItem("sampleUsers", JSON.stringify(responseData.sampleUsers));
        localStorage.setItem("dataLoaded", true);
        localStorage.setItem("sampleWebsocketData", JSON.stringify(responseData.sampleWebsocketData));

    })
    .catch(error => {
        // Handle error here
        console.error('There was a problem with your fetch operation:', error);
    });
}
