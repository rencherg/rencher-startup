async function logout(){

    if(localStorage.getItem("loggedIn")){

        try {
            const response = await fetch('/logout', {
                method: 'POST',
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        
            await response.json();
    
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
