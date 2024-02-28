function addInputField(id) {
    // Create a new input element
    var input = document.createElement('input');
    input.type = 'text'; // You can change the type if needed

    // Append the input to the container
    document.getElementById(id).appendChild(input);
}

data = {
    "posts":[
    {
        "user":"rencherg",
        "message":"Yo this is my sample message Dread Pirate Roberts is so cool even though Gemini doesn't think so",
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

comment={
    "user":"rencherg",
    "message":"Dang that's crazy!",
    "subcomments":[]
}

post={
    "user":"rencherg",
    "message":"Yo this is my sample message Dread Pirate Roberts is so cool even though Gemini doesn't think so",
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

// users ={"userlist":[
//     {
//         "username":"rencherg",
//         "password":"password",
//         "zipcode":84003,
//         "lat/long":"<latlong here>"
//     },
//     {
//         "username":"foxmulder",
//         "password":"password",
//         "zipcode":20535,
//         "lat/long":"<latlong here>"
//     },
//     {
//         "username":"dscully",
//         "password":"password",
//         "zipcode":20535,
//         "lat/long":"<latlong here>"
//     }
// ]}

function loadSampleData(){

    let sampleUsers ={"userlist":[
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
            "message":"Yo this is my sample message Dread Pirate Roberts is so cool even though Gemini doesn't think so",
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

    if (typeof(Storage) !== "undefined") {

        document.addEventListener("DOMContentLoaded", function() {

            if (!localStorage.getItem("dataAlreadyLoaded")) {

                localStorage.setItem("samplePostData", samplePostData);
                localStorage.setItem("sampleUsers", sampleUsers);
                localStorage.setItem("dataAlreadyLoaded", true);
            }
        });
    }
}