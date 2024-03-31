let loginTitle = document.getElementById("login-logout");
let tempTitle = document.getElementById("temp");
let username = document.getElementById("username");

updateNavBar()

async function updateNavBar(){

    if(localStorage.getItem("loggedIn")){
        loginTitle.textContent = 'Logout'

        username.textContent = localStorage.getItem("currentUser")

        let temp = await getTemp()
        if(temp!=undefined){
            tempTitle.textContent = temp + '°'
        }
    }else{
        loginTitle.textContent = 'Login'
        username.textContent = ''
    }
}

async function getTemp(){
    let zipCode = localStorage.getItem("zipcode")

    const url = '/weather/' + zipCode;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        const temp = responseData.temperature
        // console.log(temp)
        return temp;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}