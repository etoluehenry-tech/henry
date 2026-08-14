import {apikey,geoUrl, weatherUrl, forecastUrl} from "./real weather.js";
import { updateForecast } from "./ui.js";


export async function checkweather(city) {
    try {

        // Get latitude and longitude
        const geoResponse = await fetch(
            `${geoUrl}${city}&limit=1&appid=${apikey}`
        );

        const geoData = await geoResponse.json();

        if (geoData.length === 0) {
            alert("City not found");
            return;
        }

        const lat = geoData[0].lat;
        const lon = geoData[0].lon;


        // Get forecast
        const forecastResponse = await fetch(
            `${forecastUrl}&lat=${lat}&lon=${lon}&appid=${apikey}`
        );

        const forecastData = await forecastResponse.json();

        updateForecast(forecastData);


        // Get current weather
        const response = await fetch(
            `${weatherUrl}&lat=${lat}&lon=${lon}&appid=${apikey}`
        );

        const data = await response.json();

        console.log(data);


        // Display current weather
        document.querySelector(".current-city").innerHTML =
            `${data.name}, ${data.sys.country}`;

        document.querySelector(".current-temp").innerHTML =
            Math.round(data.main.temp) + "°C";

        document.querySelector(".current-humidity").innerHTML =
            data.main.humidity + "%";

        document.querySelector(".current-wind").innerHTML =
            data.wind.speed + " km/h";


        // Weather condition
        const weathericon =
            document.querySelector("#current-condition");

        if (data.weather[0].main === "Clouds") {
            weathericon.innerHTML = "☁️ Cloudy";

        } else if (data.weather[0].main === "Clear") {
            weathericon.innerHTML = "☀️ Clear";

        } else if (data.weather[0].main === "Rain") {
            weathericon.innerHTML = "🌧️ Rainy";

        } else if (data.weather[0].main === "Drizzle") {
            weathericon.innerHTML = "🌦️ Drizzle";

        } else if (data.weather[0].main === "Mist") {
            weathericon.innerHTML = "🌫️ Mist";

        } else {
            weathericon.innerHTML = data.weather[0].main;
        }


    } catch (error) {

        console.error("Weather error:", error);

        alert("An error occurred while fetching weather data.");
    }
}