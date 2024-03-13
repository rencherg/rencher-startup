let loginTitle = document.getElementById("login-logout");
let username = document.getElementById("username");
if(localStorage.getItem("loggedIn")){
    loginTitle.textContent = 'Logout'
    username.textContent = localStorage.getItem("currentUser")
}else{
    loginTitle.textContent = 'Login'
    username.textContent = ''
}