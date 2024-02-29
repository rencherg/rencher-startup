let commentLabel = document.getElementById("comment-label")
let classMembers = document.querySelectorAll('.loaded-comment');
classMembers.forEach(function(member) {
    member.addEventListener('click', function() {

        localStorage.setItem('currentComment', 'main')
        commentLabel.textContent = member.textContent.substring(0,40);
        
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
        processComment(storageContents, comment.value)
    }

    let errorDiv = document.getElementById("error-message");

    if(errorDiv.hasChildNodes()){
        errorDiv.removeChild(errorDiv.firstChild);
    }

    let pTag = document.createElement("p");
    pTag.className = "form-content"
    pTag.textContent = errorMessage
    errorDiv.appendChild(pTag);
    
    comment.value = '';
    
    });

function processComment(postData, commentText){

    console.log(commentText)
    let currentPostID = localStorage.getItem("currentPost")
    let parentID = localStorage.getItem("currentComment")

    console.log(postData["posts"])
    let desiredPost = ''
    let desiredParent = ''

    //find correct post
    postData["posts"].forEach(function(post) {

        console.log(post["id"])
        console.log(currentPostID)

        if(post["id"].toString()===currentPostID.toString()){
            desiredPost = post
        }
    });

    console.log(desiredPost)

    

    //find new id
    //increment new id
    //find comment parent
    //create child
}