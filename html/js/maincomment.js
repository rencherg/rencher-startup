let commentLabel = document.getElementById("comment-label")
let classMembers = document.querySelectorAll('.loaded-comment');
classMembers.forEach(function(member) {
    member.addEventListener('click', function() {

        localStorage.setItem('currentComment', member.id)
        commentLabel.textContent = 'Commenting on: '+member.textContent.substring(0,40);
        
    });
});

let loginForm = document.getElementById("main-comment");
let storageContents = JSON.parse(localStorage.getItem('samplePostData'))
let samplePosts = storageContents["posts"]

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let comment = document.getElementById("comment-input");

    let errorMessage=''

    if(comment.value === ''){
        errorMessage= 'Comment must not be blank'
    }else{
        newPostData = processComment(storageContents, comment.value)
        localStorage.setItem('samplePostData', JSON.stringify(newPostData))
        location.reload()
    }

    let errorDiv = document.getElementById("error-message");

    if(errorDiv.hasChildNodes()){
        errorDiv.removeChild(errorDiv.firstChild);
    }

    let pTag = document.createElement("p");
    pTag.className = "form-content"
    pTag.textContent = errorMessage
    errorDiv.appendChild(pTag);
    
});

function processComment(postData, commentText){
    let currentPostID = localStorage.getItem("currentPost")
    let parentID = localStorage.getItem("currentComment")

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