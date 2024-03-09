let registerForm = document.getElementById("register-form");
// let users = sampleUsers.userlist;
let storageContents = JSON.parse(localStorage.getItem('sampleUsers'))
let users = storageContents.userlist

registerForm.addEventListener("submit", (e) => {
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
        users.push(
            {
                "username":username.value,
                "password":password.value,
                "zipcode":zip.value,
                "lat/long":"<latlong here>"
            }
        )
        sampleUsers.userlist = users
        localStorage.removeItem("sampleUsers")
        localStorage.setItem("sampleUsers", JSON.stringify(sampleUsers))
        localStorage.setItem("loggedIn", true)
        localStorage.setItem("currentUser", username.value)
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