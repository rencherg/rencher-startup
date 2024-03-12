let loginTitle = document.getElementById("login-logout");
let username = document.getElementById("username");
if(localStorage.getItem("loggedIn")){
    loginTitle.textContent = 'Logout'
    username.textContent = localStorage.getItem("currentUser")
}else{
    loginTitle.textContent = 'Login'
    username.textContent = ''
}


//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&temperature_unit=fahrenheit