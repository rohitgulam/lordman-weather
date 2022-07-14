const weatherForm = document.getElementById('weather-form');



const cityName = document.getElementById('cityname');
const weather = document.getElementById('weather');
const country = document.getElementById('country');
const windspeed =document.getElementById('windspeed')
const lat = document.getElementById('lat')
const log = document.getElementById('log')
const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const rain = document.getElementById('rain')


weatherForm.addEventListener('submit', (e) => {

    // console.log(e.target[0]);
    getWeather(e.target[0].value)
    e.preventDefault()
})






async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0823fec12628dde517463b87570b723c`);


    const responseData = await response.json();
    
    console.log(responseData['weather'][0]['main']);
    console.log(responseData);

    cityName.innerHTML = responseData['name'];
    weather.innerHTML = responseData['weather'][0]['main'];
    country.innerHTML = responseData['sys']['country'];
    windspeed.innerHTML = responseData['wind']['speed']
    lat.innerHTML = responseData['coord']['lat']
    log.innerHTML = responseData['coord']['lon']
    temp.innerHTML = responseData['main']['temp']
    humidity.innerHTML = responseData['main']['humidity']                
    
}
