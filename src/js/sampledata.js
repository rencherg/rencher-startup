async function sampleData(){
    if (!localStorage.getItem("dataLoaded")){

        try{

            console.log('hello')

            const response = await fetch('/data', {
                method: 'GET',
            })
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        
            responseData = await response.json()
    
            localStorage.setItem("samplePostData", JSON.stringify(responseData.samplePostData));
            localStorage.setItem("dataLoaded", true);
            localStorage.setItem("sampleWebsocketData", JSON.stringify(responseData.sampleWebsocketData));

        } catch(error) {
            console.error('There was a problem with your fetch operation:', error);
        };
    }
}

sampleData()