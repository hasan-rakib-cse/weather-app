const buttonSearch =  document.getElementById('buttonSearch');
const weatherIcon = document.getElementById('weatherIcon');
const locationName = document.getElementById('locationName');
const locationTemperature = document.getElementById('locationTemp');
const locationWeather = document.getElementById('locationWeather');

buttonSearch.addEventListener('click', function () {
    const inputSearch = document.getElementById('inputSearch');
    const inputValue = inputSearch.value.toString().toLowerCase();
    
    const API_KEY = `5b7a6df53f4d763471ee49be71dc4467`;
    const CITY = inputValue;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY}&id=524901&appid=${API_KEY}&units=metric`;
    inputSearch.value = "";

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))

    function displayTemperature(info) {
        const cityName = info.city.name;
        const temperature = info.list[0].main.temp;
        const weather = info.list[0].weather[0].main;
        const icon = info.list[0].weather[0].icon;

        locationName.innerText = cityName;
        locationTemperature.innerText = temperature;
        locationWeather.innerText = weather;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
        weatherIcon.setAttribute('src', iconUrl);
    }
})