let commentLabel = document.getElementById("comment-label")
let classMembers = document.querySelectorAll('.loaded-comment');
localStorage.setItem('currentComment', 'post-content')
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

        let data={
            "postData":storageContents,
            "commentText":comment.value,
            "currentPostID":localStorage.getItem("currentPost"),
            "parentID":localStorage.getItem("currentComment")
        }

        fetch('/comment', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });

        localStorage.removeItem("samplePostData")
        localStorage.removeItem("sampleWebsocketData")
        localStorage.removeItem("dataLoaded")
        window.location.href = "/"
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