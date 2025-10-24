// DOM element selections
const weatherform = document.querySelector(".weather-form");
const cityInput = document.querySelector(".city-input");
const weatherResult = document.querySelector(".weather-result");
const cityDisplay = document.querySelector(".cityDisplay");
const tempDisplay = document.querySelector(".tempDisplay");
const humidityDisplay = document.querySelector(".humidityDisplay");
const descDisplay = document.querySelector(".descDisplay");
const weatheremoji = document.querySelector(".weatheremoji");
const errordisplay = document.querySelector(".errordisplay");
// API key (move to env/config for production)
const apiKey = "9f3aa217c5c3f01e672c9958ffb5cf42";
// Form submit handler
weatherform.addEventListener("submit", async (e) => {
    e.preventDefault();
    const cityName = cityInput.value.trim().toLowerCase();
    if (cityName === "") {
        displayError("Please enter a city name.");
        return;
    }
    try {
        const weatherData = await fetchWeatherData(cityName);
        displayWeatherInfo(weatherData);
    } catch (error) {
        displayError("Error fetching weather data.");
    }
});
// Fetch weather data from API
async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}
// Display weather info in the UI
function displayWeatherInfo(data) {
    if (data.cod && data.cod !== 200) {
        displayError(data.message || "City not found.");
        return;
    }
    // Hide error if present
    if (errordisplay) {
        errordisplay.textContent = "";
    }
    weatherResult.style.display = "block";
    cityDisplay.textContent = `City: ${data.name}`;
    tempDisplay.textContent = `Temperature: ${data.main.temp} °C`;
    humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`;
    descDisplay.textContent = `Description: ${data.weather[0].description}`;
    weatheremoji.textContent = getWeatherEmoji(data.weather[0].description);
}
// Get emoji based on weather description
function getWeatherEmoji(description) {
    description = description.toLowerCase();
    if (description.includes("clear")) {
        return "☀️";
    } else if (description.includes("cloud")) {
        return "☁️";
    } else if (description.includes("rain")) {
        return "🌧️";
    } else if (description.includes("snow")) {
        return "❄️";
    }
    return "🌈";
}
// Display error message in the UI
function displayError(message) {
    if (errordisplay) {
        errordisplay.textContent = message;
        errordisplay.classList.add("error-message");
    }
    weatherResult.style.display = "block";
    cityDisplay.textContent = "";
    tempDisplay.textContent = "";
    humidityDisplay.textContent = "";
    descDisplay.textContent = "";
    weatheremoji.textContent = "";
}