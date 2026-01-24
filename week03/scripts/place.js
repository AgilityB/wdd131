// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


// -----------------------------
// Footer Dates
// -----------------------------

// Current year
const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = new Date().getFullYear();

// Last modified date
const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;


// -----------------------------
// Weather Data (Static Values)
// -----------------------------

// Use metric units (°C and km/h) OR imperial (°F and mph)
// Match these values to what you display in your HTML
const temperature = 8;      // °C
const windSpeed = 12;       // km/h

const windChillSpan = document.querySelector("#windchill");


// -----------------------------
// Wind Chill Function
// -----------------------------

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}


// -----------------------------
// Wind Chill Logic
// -----------------------------

if (temperature <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillSpan.textContent = "N/A";
}
