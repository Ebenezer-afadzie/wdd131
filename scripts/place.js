// Update footer with the current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent ='Lastmodification: ' + document.lastModified;

// Wind chill calculation
const temperature = 10; // Static value in °C
const windSpeed = 6;    // Static value in km/h

function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

function displayWindChill(temp, speed) {
  const windChillElement = document.getElementById("wind-chill");
  if (temp <= 10 && speed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temp, speed)}°C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}

displayWindChill(temperature, windSpeed);