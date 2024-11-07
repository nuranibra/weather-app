var countryInp = document.getElementById("searchButton");
var countryText = document.getElementById("countryText");
var derece = document.getElementById("weatherDerece");
var weatherAboutText = document.getElementById("weatherAbout");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var mainDiv = document.getElementById("mainDiv");
var notFoundDiv = document.getElementById("notFound");

const apiKey = "76b7d7cb1cc643d9fafe2e62a0907499";
var weather = {};

if(countryText.innerHTML.length != 0){
    mainDiv.style.display = "block"
}

document.body.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        if(countryInp.value.length != 0){
            var city = countryInp.value;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                .then(res => res.json())
                .then(response => {
                    weather = response;
                    console.log(weather);
                    notFoundDiv.style.display = "none";
                    mainDiv.style.display = "block";
                    countryInp.textContent = weather.name;
                    countryText.innerHTML = weather.name;
                    derece.innerHTML = `${weather.main.temp}&deg;`;
                    weatherAboutText.innerHTML = weather.weather[0].description;
                    humidity.innerHTML = weather.main.humidity;
                    wind.innerHTML = `${weather.wind.speed}km/h`;
                })
        } else{
            alert("Input is empty")
        }
    }
})

