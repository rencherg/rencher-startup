let loginForm = document.getElementById("login-form");
// let oldUsers = JSON.parse(localStorage.getItem('sampleUsers'))
let users = sampleUsers.userlist
// let posts = JSON.parse(localStorage.getItem("samplePostData"))

let posts = JSON.parse(localStorage.getItem('samplePostData'))

// console.log(posts)
// console.log(posts["posts"])
// console.log(users)
// console.log(users["userList"])
// console.log(sampleUsers.userlist)

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    // console.log(username.value)
    // console.log(password.value)

    // console.log(users)
    // console.log(users.userList)
    // console.log(users['userList'][0])
    // console.log(users."userList")

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
