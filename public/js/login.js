let loginForm = document.getElementById("login-form");

//endpoint call here - if good credentials then return token
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    let username = document.getElementById('usernameInput');
    let password = document.getElementById('password');

    requestData = {
        "username": username.value,
        "password": password.value
    }

    try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const responseBody = await response.json();

        if(responseBody.message === "success"){
            localStorage.setItem("loggedIn", true)
            localStorage.setItem("currentUser", username.value)
            localStorage.setItem("zipcode", responseBody.userZip)
            window.location.href = "/";
        }else{
            let incorrectItem = document.getElementById("incorrectDiv");

            if(!incorrectItem.hasChildNodes()){
                let pTag = document.createElement("p");
                pTag.className = "form-content"
                pTag.textContent = "Incorrect Username/Password"
                incorrectItem.appendChild(pTag);
            }
    
            username.value = '';
            password.value = '';
        }
        
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        throw error;
    }
});
