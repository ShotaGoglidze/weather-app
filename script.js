const apiKey = '2e0486f14dcd36830da7df1bfe1c5f20&units';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=tbilisi';

async function checkWeather (){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
}

checkWeather();