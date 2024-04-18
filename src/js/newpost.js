let registerForm = document.getElementById("new-post");
let errorField = document.getElementById("errormessage");
let postData = JSON.parse(localStorage.getItem('samplePostData'))
let postList = postData["posts"]

registerForm.addEventListener("submit", async (e) => {
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

        try{
            const response = await fetch('/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            localStorage.removeItem("samplePostData")
            localStorage.removeItem("dataLoaded")
            window.location.href = "/"
        }catch(error){
            console.error('There was a problem with your fetch operation:', error);

        }

    }

    if(errorField.hasChildNodes()){
        errorField.removeChild(errorField.firstChild);
    }

    let pTag = document.createElement("p");
    pTag.className = "form-content"
    pTag.textContent = errorMessage
    errorField.appendChild(pTag);
  
  });