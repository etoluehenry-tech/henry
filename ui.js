import {selectors} from "./real weather.js";

export function updateForecast(forecastData) {

    const forecastItems = selectors.forecastItems;

    // Get one forecast every 8 items
    const dailyForecast = forecastData.list.filter(
        (item, index) => index % 8 === 0
    );

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    dailyForecast.slice(0, 7).forEach((item, index) => {

        const date = new Date(item.dt * 1000);

        forecastItems[index].querySelector(".day").innerHTML =
            days[date.getDay()];

        forecastItems[index].querySelector(".temp").innerHTML =
            Math.round(item.main.temp) + "°C";

        let icon = "☀️";

        switch (item.weather[0].main) {

            case "Clouds":
                icon = "☁️";
                break;

            case "Rain":
                icon = "🌧️";
                break;

            case "Thunderstorm":
                icon = "⛈️";
                break;

            case "Drizzle":
                icon = "🌦️";
                break;

            case "Snow":
                icon = "❄️";
                break;

            case "Mist":
            case "Fog":
            case "Haze":
                icon = "🌫️";
                break;

            case "Clear":
                icon = "☀️";
                break;
        }

        forecastItems[index].querySelector(".icon").innerHTML = icon;
    });
}