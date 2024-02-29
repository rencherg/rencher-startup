let registerForm = document.getElementById("new-post");
let errorField = document.getElementById("errormessage");
let postData = JSON.parse(localStorage.getItem('samplePostData'))
let postList = postData["posts"]

console.log(postData)
console.log(postList)

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let text = document.getElementById('post-input');

    errorMessage=''

    if(!localStorage.getItem("currentUser")){
        errorMessage = 'You must log in to post.'
    }else if(text.value === ''){
        errorMessage = 'Your post cannot be empty.'
    }else{
        postList.push({
            "user":localStorage.getItem("currentUser"),
            "message":text.value,
            "id":postList.length+1,
            "comment_id":1,
            "comments": []
        })

        postData["posts"] = postList
        localStorage.setItem("samplePostData", JSON.stringify(postData))
        window.location.href = "/html/";
    }

    if(errorField.hasChildNodes()){
        errorField.removeChild(errorField.firstChild);
    }

    let pTag = document.createElement("p");
    pTag.className = "form-content"
    pTag.textContent = errorMessage
    errorField.appendChild(pTag);
  
  });