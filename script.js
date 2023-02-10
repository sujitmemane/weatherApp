const result = document.querySelector(".result");
const input = document.querySelector(".input-search");
const button = document.querySelector(".search-btn");
key = "76c0f1a6f780ab0a908d9e34ac403a6c";
const getWeatherInfo = async function () {
  let city = input.value;
  if (city.length === 0) {
    result.innerHTML = `<h1 class="named">Please Enter the City Name</h1>`;
  } else {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      city = "";
      //   console.log(data.name);
      //   console.log(data.weather[0].icon);
      //   console.log(data.weather[0].main);
      //   console.log(data.weather[0].description);
      console.log(data.name);
      console.log(data.main.temp_min);
      console.log(data.main.temp_max);

      const cityName = data.name;
      const main = data.weather[0].main;
      const desc = data.weather[0].description;
      const image = data.weather[0].icon;
      const temp = data.main.temp;
      const minTemp = data.main.temp_min;
      const maxTemp = data.main.temp_max;
      result.innerHTML = `
      
      <h1 class="city-name">${cityName.toUpperCase()}</h1>
      <img class="img" src="https://openweathermap.org/img/w/${
        data.weather[0].icon
      }.png">
      <h2 class="main">${main}</h2>
      <h1 class="temp">${temp}&#176;</h2>
      <div class="box">
       <div> <h3>MIN</h3> <h2>${minTemp}&#176;</h2></div>
       <div> <h3>MIN</h3> <h2>${maxTemp}&#176;</h2></div>
      </div>
      
      `;
    } catch (err) {
      result.innerHTML = `<h2> CITY NOT FOUND </h2>`;
    }
  }
};

button.addEventListener("click", getWeatherInfo);
window.addEventListener("load", getWeatherInfo);
