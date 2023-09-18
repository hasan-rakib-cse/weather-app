const buttonSearch =  document.getElementById('buttonSearch');
buttonSearch.addEventListener('click', () => {
    const inputSearch = document.getElementById('inputSearch');
    const inputValue = inputSearch.value.toString().toLowerCase();
    
    const API_KEY = `5b7a6df53f4d763471ee49be71dc4467`;
    const CITY = inputValue;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY}&id=524901&appid=${API_KEY}&units=metric`;
    
    inputSearch.value = "";

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
})

const displayTemperature = (info) =>  {
    const cityName = info.city.name;
    const temperature = info.list[0].main.temp;
    const weather = info.list[0].weather[0].main;
    const icon = info.list[0].weather[0].icon;

    setInnerText('locationName', cityName);
    setInnerText('locationTemp', temperature);
    setInnerText('locationWeather', weather);

    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`
    const weatherIcon = document.getElementById('weatherIcon');
    weatherIcon.setAttribute('src', iconURL);
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}