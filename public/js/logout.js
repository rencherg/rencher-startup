//some tweaking here - maybe an api call?

async function logout(){

    if(localStorage.getItem("loggedIn")){

        try {
            const response = await fetch('/logout', {
                method: 'POST',
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        
            const responseBody = await response.json();
    
            // if(responseBody.message === "success"){
            //     localStorage.setItem("loggedIn", true)
            //     localStorage.setItem("currentUser", responseBody.username)
            //     localStorage.setItem("zipcode", responseBody.userZip)
    
            //     loginTitle.textContent = 'Logout'
    
            //     username.textContent = localStorage.getItem("currentUser")
        
            //     const temp = await getTemp()
            //     if(temp!=undefined){
            //         tempTitle.textContent = temp + '°'
            //     }
            //     localStorage.setItem("temp", temp)
            // }
    
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("currentUser");
            window.location.href = "/";
            
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            throw error;
        }
    }
}

logout()
