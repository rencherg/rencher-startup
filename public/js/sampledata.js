if (!localStorage.getItem("dataLoaded")){
    fetch('/data', {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json()
    }).then(responseData => {
        localStorage.setItem("samplePostData", JSON.stringify(responseData.samplePostData));
        localStorage.setItem("dataLoaded", true);
        localStorage.setItem("sampleWebsocketData", JSON.stringify(responseData.sampleWebsocketData));

    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}
