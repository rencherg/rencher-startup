let registerForm = document.getElementById("register-form");
// let users = sampleUsers.userlist;
let storageContents = JSON.parse(localStorage.getItem('sampleUsers'))
let users = storageContents.userlist

registerForm.addEventListener("submit", (e) => {

    console.log('here')
    e.preventDefault();
  
    let username = document.getElementById('username-input');
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('password-confirm');
    let zip = document.getElementById('zip');

    duplicateUser=false

    errorMessage=''

    users.forEach(user => {

        if (username.value === user["username"]) {
            duplicateUser=true
        }
    });

    if((username.value === '')||(password.value === '')||(passwordConfirm.value === '')||(zip.value === '')){
        errorMessage = 'Please fill out all fields.'
    }else if(duplicateUser){
        errorMessage = 'User already exists.'
    }else if(!(password.value === passwordConfirm.value)){
        errorMessage = 'Passwords do not match'
    }else{
        let data={
                    "username":username.value,
                    "password":password.value,
                    "zipcode":zip.value,
                    "lat/long":"<latlong here>"
                }
        // users.push(
        //     {
        //         "username":username.value,
        //         "password":password.value,
        //         "zipcode":zip.value,
        //         "lat/long":"<latlong here>"
        //     }
        // )
        // sampleUsers.userlist = users
        // localStorage.removeItem("sampleUsers")
        // localStorage.setItem("sampleUsers", JSON.stringify(sampleUsers))

        // Make the POST request
        fetch('/newuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers you need, like authentication tokens
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Handle success response here
        })
        .catch(error => {
            // Handle error here
            console.error('There was a problem with your fetch operation:', error);
        });

        sampleUsers.userlist = users
        localStorage.removeItem("sampleUsers")
        localStorage.setItem("loggedIn", true)
        localStorage.setItem("currentUser", username.value)
        localStorage.removeItem("dataLoaded")
        window.location.href = "/";
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