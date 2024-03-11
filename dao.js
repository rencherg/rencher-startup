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

function addToWebsocket(comment){
    sampleWebsocketData['data'].push(comment)
}

function addToUsers(obj){
    sampleUsers['userlist'].push(obj)
}

function addPost(obj){
    samplePostData['posts'].push(obj)
}

function processComment(postData, commentText, currentPostID, parentID){
    // let currentPostID = localStorage.getItem("currentPost")
    // let parentID = localStorage.getItem("currentComment")

    let desiredPost = ''
    let postIndex

    //find correct post
    // postData["posts"].forEach(function(post) {
    for(let i = 0; i < postData["posts"].length; i++){
        if(postData["posts"][i]["id"].toString()===currentPostID.toString()){

            desiredPost = postData["posts"][i]
            postIndex = i
        }
    }

    //If we are replying to the main post
    if(parentID === 'post-content'){
                
        postData["posts"][postIndex]['comments'].push({
            "user":desiredPost['user'],
            "message":commentText,
            "id":desiredPost['comment_id'],
            "subcomments":[]
        })

        postData['posts'][postIndex]['comment_id'] = postData['posts'][postIndex]['comment_id']+1

        return postData

    }

    //Update desired parent comment tree
    for(let i = 0; i < desiredPost['comments'].length; i++){
        let updatedPost = addComment(desiredPost['comments'][i], parentID, desiredPost['comment_id'], desiredPost['user'], commentText)
        if(updatedPost!== null){

            desiredPost['comments'][i] = updatedPost
            postData['posts'][postIndex]['comment_id'] = postData['posts'][postIndex]['comment_id']+1
            postData['posts'][postIndex] = desiredPost

        }
    }

    return postData
}

//helper function for process comment
function addComment(comment, parentID, newID, user, newMessage){
    if(comment['id'].toString() === parentID){
        comment['subcomments'].push({
            "user":user,
            "message":newMessage,
            "id":newID,
            "subcomments":[]
        })
        return comment
    }else if(comment['subcomments'].length > 0){
        for(let i = 0; i < comment['subcomments'].length; i++){
            let result = addComment(comment['subcomments'][i], parentID, newID, user, newMessage)
            if(result !== null){
                comment['subcomments'][i] = result
                return comment
            }
        }
        return null
    }else{
        return null
    }
}

let data = 
        {
            "sampleUsers": sampleUsers,
            "samplePostData": samplePostData,
            "sampleWebsocketData": sampleWebsocketData
        }
module.exports = {data, processComment, addToUsers, addPost, addToWebsocket}