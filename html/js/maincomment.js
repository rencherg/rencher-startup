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

console.log(posts)

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    debugger

    alert('good')
    errorMessage=''

    

    let incorrectItem = document.getElementById("incorrectDiv");

    if(!incorrectItem.hasChildNodes()){
        let pTag = document.createElement("p");
        pTag.className = "form-content"
        pTag.textContent = "Incorrect Username/Password"
        incorrectItem.appendChild(pTag);
    }
    
    username.value = '';
    password.value = '';
    
    });