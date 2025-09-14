const apiKey="a2aec8b31cf9474cb82a9368ba4d1e77";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

       async function checkWeather(city) {
        const response = await fetch(apiurl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".error").innerHTML = "City Not Found";
        }

        else{
            var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";

        if(data.weather[0].main == "Clouds"){
            weathericon.src = "cloud.png";}
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "clear.png";}
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "rain.png";}
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "mist.png";}
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "drizzle.png";}
        else if(data.weather[0].main == "Snow"){
            weathericon.src = "snow.png";}
        else if(data.weather[0].main == "Thunderstorm"){
            weathericon.src = "thunderstorm.png";}
        else{
            weathericon.src = "weather.png";}  
            
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
        }        

searchBtn.addEventListener("click", () => {
     
    checkWeather(searchBox.value);
})
        