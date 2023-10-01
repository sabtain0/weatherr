const key = "aab121dbc170eaac936caf29f69199a1";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searching = document.querySelector(".search input")
const searchbtn = document.getElementById("btn")
const searchbtn2 = document.getElementById("btn2")
const image = document.querySelector(".weather-icon")
async function checkweather(city){
    const response = await fetch(url + city + `&appid=${key}`);
    var data = await response.json()
    if(response.status == 404){
        alert("Check the city name")
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Km/h";
    
    if(data.weather[0].main == "Smoke"){
        image.src = "mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        image.src = "rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        image.src = "mist.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        image.src = "rain.png"
    }
    else if(data.weather[0].main == "Clear"){
        image.src = "clear.png"
    }
    else if(data.weather[0].main == "Snow"){
        image.src = "snow.png"
    }
    document.querySelector(".waether").style.display = "block"
    document.querySelector("#btn2").style.display = "block"
    searchbtn2.addEventListener("click" , ()=>{
        document.querySelector(".waether").style.display = "none"
    })

 }
searchbtn.addEventListener("click" , ()=>{
    checkweather(searching.value);
})
