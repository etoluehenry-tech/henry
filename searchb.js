import { searchbtn, searchbox } from "./real weather.js";
import { checkweather } from "./api.js";
export function search () {
searchbtn.addEventListener("click", () => {
    if (searchbox.value.trim() === "") {
        alert("Please enter a city name");
        return;
    }
    checkweather(searchbox.value.trim());
});

searchbox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkweather(searchbox.value.trim());
    }
});
}   