if(localStorage.getItem("loggedIn")){
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
}