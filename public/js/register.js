let registerForm = document.getElementById("register-form");

let data
let errorMessage

registerForm.addEventListener("submit", (e) => {

    e.preventDefault();
  
    let username = document.getElementById('username-input');
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('password-confirm');
    let zip = document.getElementById('zip');

    duplicateUser=false

    const regex = /^\d{5}$/

    if((username.value === '')||(password.value === '')||(passwordConfirm.value === '')||(zip.value === '')){
        errorMessage = 'Please fill out all fields.'
    }else if(!(password.value === passwordConfirm.value)){
        errorMessage = 'Passwords do not match'
    }else if(!(regex.test(zip.value))){
        errorMessage = 'Zip Code must be a five digit number'
    }else{
        data={
                "username":username.value,
                "password":password.value,
                "zipcode":zip.value,
                "lat/long":"<latlong here>",
                "authToken":""
            }

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(responseBody => {
            console.log('ok')
            if(responseBody.message === "success"){
                localStorage.removeItem("loggedIn")
                localStorage.removeItem("dataLoaded")
                localStorage.setItem("loggedIn", true)
                localStorage.setItem("currentUser", responseBody.username)
                localStorage.setItem("zipcode", responseBody.userZip)
                window.location.href = "/";
            }else{
                errorMessage = responseBody.message

                let incorrectItem = document.getElementById("error-message");

                if(incorrectItem.hasChildNodes()){
                    incorrectItem.removeChild(incorrectItem.firstChild);
                }

                let pTag = document.createElement("p");
                pTag.className = "form-content"
                pTag.textContent = errorMessage
                incorrectItem.appendChild(pTag);
            }

        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    }

    let incorrectItem = document.getElementById("error-message");

    if(incorrectItem.hasChildNodes()){
        incorrectItem.removeChild(incorrectItem.firstChild);
    }

    let pTag = document.createElement("p");
    pTag.className = "form-content"
    pTag.textContent = errorMessage
    incorrectItem.appendChild(pTag);
    
    username.value = '';
    password.value = '';
    passwordConfirm.value='';
    zip.value='';
  
});