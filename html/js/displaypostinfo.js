let currentUrl = window.location.href;
let urlObj = new URL(currentUrl);
let id = urlObj.searchParams.get('id');
console.log(id)

let posts = JSON.parse(localStorage.getItem('samplePostData'))
let title = document.getElementById('title');
let postContent = document.getElementById('post-content');
let commentDiv = document.getElementById('loaded-comments');

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
    subcomments = foundPost['comments']

    subcomments.forEach(subcomment => {
        insertComments(subcomment, 1, commentDiv)
    });

}else{
    title.textContent = "Post Not Found"
    postContent.textContent = ''
}

function insertComments(parentComment, depth, parentContainer) {

    let html = htmlBuilder(parentComment["message"], depth)

    parentContainer.insertAdjacentHTML('beforeend', html);

    if(parentComment["subcomments"].length > 0){
        parentComment["subcomments"].forEach(comment => {
            insertComments(comment, depth+1, parentContainer)
        });
    }
}

function htmlBuilder(commentText, depth){
    html=''

    if(depth === 1){
        html = '<p>'+commentText+'</p>'
    }else{
        html = '<p>'
        for(let i = 0; i < depth-1; i++){
            html += '<span>'
        }
        html+=commentText
        for(let i = 0; i < depth-1; i++){
            html += '</span>'
        }
        html == '</p>'
    }

    return html
}

// Displaying posts:
// For each comment:
// Display
// display children