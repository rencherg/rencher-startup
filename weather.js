function getWeather(zipCode){
    const weatherApiKey = 'key';
    const geoCodeApiKey = 'key'
    const currentTime = new Date().toISOString();
    // const zipCode = 83318
    const geoCodeUrl = `https://geocode.maps.co/search?q=${zipCode},USA&api_key=${geoCodeApiKey}`

    fetch(geoCodeUrl).then(response => {

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json()

    }).then(geoCodeData =>{
        console.log(geoCodeData)
        let latitude = geoCodeData[0].lat
        let longitude = geoCodeData[0].lon

        const weatherUrl = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&timesteps=current&units=imperial&apikey=${weatherApiKey}&datetime=${currentTime}`;

        return weatherUrl
    }).then(weatherUrl => {
        fetch(weatherUrl).then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
        }).then(data => {
        const currentTemperatureFahrenheit = data?.data?.timelines[0]?.intervals[0]?.values?.temperature;

        console.log(`Current temperature: ${currentTemperatureFahrenheit}°F`);

        return currentTemperatureFahrenheit

        }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    })
}

// getWeather(99723)
module.exports = getWeather