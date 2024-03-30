//some tweaking here - maybe an api call?

if(localStorage.getItem("loggedIn")){
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
}