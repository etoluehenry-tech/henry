export const apikey = "4c497a27d70e5a5b13253c44f1fc951f";
export const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
export const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
export const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric";
export const searchbox = document.querySelector(".search-box input");
export const searchbtn = document.querySelector(".search-box button");
const weathericon = document.getElementById("current-condition");

export const selectors = {
    forecast: document.querySelector(".forecast-container"),
    forecastItems: document.querySelectorAll(".forecast-item"),

    currentTemp: document.querySelector(".current-temp"),
    currentCity: document.querySelector(".current-city"),
    currentCondition: document.querySelector("#current-condition"),
    currentDescription: document.querySelector(".current-description"),
    currentHumidity: document.querySelector(".current-humidity"),
    currentWind: document.querySelector(".current-wind"),
    mainIcon: document.querySelector("#main-icon")
};




import {checkweather} from "./api.js";
import { updateForecast } from "./ui.js";
import {search} from "./searchb.js";


checkweather("Lagos");
search();