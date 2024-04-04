let loginTitle = document.getElementById("login-logout");
let tempTitle = document.getElementById("temp");
let username = document.getElementById("username");

updateNavBar()

async function updateNavBar(){

    if(localStorage.getItem("loggedIn")){
        loginTitle.textContent = 'Logout'

        username.textContent = localStorage.getItem("currentUser")

        if(!localStorage.getItem("temp")){
            localStorage.setItem("temp", await getTemp())
        }

        const temp = localStorage.getItem("temp")
        if(temp!=undefined){
            tempTitle.textContent = temp + '°'
        }
    }else{

        try {
            const response = await fetch('/authenticate', {
                method: 'POST',
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        
            const responseBody = await response.json();
    
            if(responseBody.message === "success"){
                localStorage.setItem("loggedIn", true)
                localStorage.setItem("currentUser", responseBody.username)
                localStorage.setItem("zipcode", responseBody.userZip)

                loginTitle.textContent = 'Logout'

                username.textContent = localStorage.getItem("currentUser")
        
                const temp = await getTemp()
                if(temp!=undefined){
                    tempTitle.textContent = temp + '°'
                }
                localStorage.setItem("temp", temp)
            }else{
                loginTitle.textContent = 'Login'
                username.textContent = ''
            }
            
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            throw error;
        }
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
        return temp;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}