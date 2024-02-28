let currentUrl = window.location.href;
let urlObj = new URL(currentUrl);
let id = urlObj.searchParams.get('id');
console.log(id)

let posts = JSON.parse(localStorage.getItem('samplePostData'))
let title = document.getElementById('title');
let postContent = document.getElementById('post-content');

foundPost = null;
// debugger;

posts["posts"].forEach(post => {

    if(parseInt(post["id"],10) === parseInt(id,10)){
        foundPost = post
    }
});

if(foundPost){
    title.textContent = foundPost['user'] + ' Wrote:'
    postContent.textContent = foundPost['message']

    let IDIdentifier = 0;

    foundPost.forEach(comment => {



    });

}else{
    title.textContent = "Post Not Found"
    postContent.textContent = ''
}

// function fillInSubcomments(comment, ){

// }

// function getNewID(){
    
// }