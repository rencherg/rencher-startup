// async function getWeather(zipCode){
//     // const tomorrowWeatherApiKey = '5BHzrcg8LJGZegF4YyU6SUqS6BIv77Mw';
//     const weatherApiKey = 'key';
//     // const geoCodeApiKey = 'key'
//     const currentTime = new Date().toISOString();
//     // const geoCodeUrl = `https://geocode.maps.co/search?q=${zipCode},USA&api_key=${geoCodeApiKey}`

// const { response } = require("express");

//     // console.log(zipCode)
//     // console.log(geoCodeUrl)

//     fetch(geoCodeUrl).then(response => {

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         return response.json()

//     }).then(geoCodeData =>{
//         // console.log(geoCodeData)
//         let latitude = geoCodeData[0].lat
//         let longitude = geoCodeData[0].lon

//         //This API below is better but we were getting rate limited ):
//         // const weatherUrl = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&timesteps=current&units=imperial&apikey=${weatherApiKey}&datetime=${currentTime}`;
//         const weatherUrl = `https://api.open-meteo.com/weather?latitude=${latitude}&longitude=${longitude}&units=imperial`;

//         console.log(weatherUrl)

//         return weatherUrl
//     }).then(weatherUrl => {
//         console.log(weatherUrl)
//         fetch(weatherUrl).then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         }).then(data => {
//             console.log(data)
//             const currentTemperatureFahrenheit = currentWeather.temperature;
//             // const currentTemperatureFahrenheit = data?.data?.timelines[0]?.intervals[0]?.values?.temperature;

//             console.log(`Current temperature: ${currentTemperatureFahrenheit}°F`);

//             // console.log(data?.data?.timelines[0]?.intervals)

//             return currentTemperatureFahrenheit

//         }).catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
//     })
// }

// async function getWeather(zipCode){
//     const weatherApiKey = 'key';
//     const url = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${zipCode}&units=imperial`;
//     // const currentTime = new Date().toISOString();

//     let functionResponse

//     fetch(url).then(response => {

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         return response.json()

//     }).then(json =>{
//         // console.log(json)

//         let response = {
//             "city": json.location.name,
//             "temperature": json.current.temp_f
//         }

//         console.log(response)

//         functionResponse = response

//     })

//     console.log(functionResponse)

//     return functionResponse
// }

async function getWeather(zipCode){
    const weatherApiKey = 'e351ed4582104db6b1310847241303';
    const url = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${zipCode}&units=imperial`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        const weatherData = {
            "city": responseData.location.name,
            "temperature": responseData.current.temp_f
        };
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

// console.log(weatherData)
module.exports = getWeather