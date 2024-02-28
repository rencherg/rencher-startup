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


// document.addEventListener("DOMContentLoaded", function() {

//     if (!localStorage.getItem("dataAlreadyLoaded")) {

//         localStorage.setItem("samplePostData", JSON.stringify(samplePostData));
//         localStorage.setItem('sample', 'sampledata');
//         localStorage.setItem("sampleUsers", sampleUsers);
//         localStorage.setItem("dataAlreadyLoaded", true);
//         localStorage.setItem("test", samplePostData["posts"][0]["message"]);
//         console.log(samplePostData["posts"][0]);
//         // console.log(samplePostData["posts"][0]);


//         // Define a JSON object
//         const myObject = {
//             name: "John",
//             age: 30,
//             city: "New York"
//         };

//         // Convert the JSON object to a string
//         const jsonString = JSON.stringify(myObject);

//         // Put the string into localStorage under the key 'myObject'
//         localStorage.setItem('myObject', jsonString);
//     }
// });


if (!localStorage.getItem("samplePostData")){
    localStorage.setItem("samplePostData", JSON.stringify(samplePostData));
    localStorage.setItem('sample', 'sampledata');
    localStorage.setItem("sampleUsers", sampleUsers);
}

// localStorage.setItem("dataAlreadyLoaded", true);
// localStorage.setItem("test", samplePostData["posts"][0]["message"]);
// console.log(samplePostData["posts"][0]);
// console.log(samplePostData["posts"][0]);


// // Define a JSON object
// const myObject = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Convert the JSON object to a string
// const jsonString = JSON.stringify(myObject);

// // Put the string into localStorage under the key 'myObject'
// localStorage.setItem('myObject', jsonString);
