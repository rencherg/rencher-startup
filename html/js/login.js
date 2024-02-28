let loginForm = document.getElementById("login-form");
let storageContents = JSON.parse(localStorage.getItem('sampleUsers'))
let users = storageContents.userlist

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById('usernameInput');
    let password = document.getElementById('password');

    users.forEach(user => {

        if (username.value === user["username"] && password.value === user["password"]) {
            localStorage.setItem("loggedIn", true)
            localStorage.setItem("currentUser", username.value)
            window.location.href = "/html/";
        }
    });

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
