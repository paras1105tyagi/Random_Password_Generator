async function fetchWeatherData(city, prefix = '') {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '28ced4f652mshf08a393c81296f1p15877ajsna6e310bf8f79',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (prefix === '') {
            document.getElementById('cityName').innerHTML = city;
        }
        document.getElementById(`${prefix}cloud_pct`).innerHTML = result.cloud_pct;
        document.getElementById(`${prefix}temp`).innerHTML = result.temp;
        document.getElementById(`${prefix}feels_like`).innerHTML = result.feels_like;
        document.getElementById(`${prefix}humidity`).innerHTML = result.humidity;
        document.getElementById(`${prefix}min_temp`).innerHTML = result.min_temp;
        document.getElementById(`${prefix}max_temp`).innerHTML = result.max_temp;
        document.getElementById(`${prefix}wind_speed`).innerHTML = result.wind_speed;
        document.getElementById(`${prefix}wind_degrees`).innerHTML = result.wind_degrees;
        document.getElementById(`${prefix}sunrise`).innerHTML = result.sunrise;
        document.getElementById(`${prefix}sunset`).innerHTML = result.sunset;

    } catch (error) {
        console.error(error);
    }
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    fetchWeatherData(city);
});

// Initial call for the main city display
fetchWeatherData("Delhi");

// Fetch data for the cities in the table
const cities = ["Melbourne", "Noida", "Jaipur"];
cities.forEach(city => fetchWeatherData(city, city.toLowerCase() + '_'));
