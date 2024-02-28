function addInputField(id) {
    // Create a new input element
    var input = document.createElement('input');
    input.type = 'text'; // You can change the type if needed

    // Append the input to the container
    document.getElementById(id).appendChild(input);
}

data = {"posts":[
    {},{}
]}

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

users ={"userlist":[
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