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

        let data={
            "user":localStorage.getItem("currentUser"),
            "message":text.value,
            "id":postList.length+1,
            "comment_id":1,
            "comments": []
        }

        fetch('/post', {
            method: 'POST',
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

        // postData["posts"] = postList
        localStorage.removeItem("samplePostData", JSON.stringify(postData))
        localStorage.removeItem("dataLoaded", JSON.stringify(postData))
        window.location.href = "/"

    }

    if(errorField.hasChildNodes()){
        errorField.removeChild(errorField.firstChild);
    }

    let pTag = document.createElement("p");
    pTag.className = "form-content"
    pTag.textContent = errorMessage
    errorField.appendChild(pTag);
  
  });