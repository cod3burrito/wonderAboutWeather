var apiKey = "7962c0dd481899773880cb86300b5061";
var wonderNoMore = document.querySelector("button");
var wonderingAbout = document.querySelector("#searchme");
var today = document.querySelector("current-date");
var history = document.querySelector("search-history");


const thisDay = moment().format("MM-DD-YYYY");
today.innerHTML = thisDay;

function searchHistory() {
    let list = document.createElement("li");
    list.textContent = localStorage.getItem("search-history");
    history.display.appendChild(list);
  };

  let buttnFunc = searchBttn.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("search-history", searchInput.value);
    const city = searchInput.value;
    console.log(city);
  });

  const searchLocation = "http://api.openweathermap.org/geo/1.0/direct?q=" + wonderingAbout + "&limit=1&appid=" + apiKey;
  fetch(searchLocation)
    .then((res) => res.json())
    .then((data))

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //current day
          document.querySelector(".temperature").innerHTML =
            "Temp:" + data.current.temp;
          document.querySelector(".wind").innerHTML =
            "Wind:" + data.current.wind_speed;
          document.querySelector(".humid").innerHTML =
            "Humidity:" + data.current.humidity;
          document.querySelector(".uvi").innerHTML =
            "UV Index:" + data.current.uvi;
          //fdf day one
          document.querySelector(".day-one-temp").innerHTML =
            "temp: " + data.daily[0].temp.day;
          document.querySelector(".day-one-wind").innerHTML =
            "wind: " + data.daily[0].wind_speed;
          document.querySelector(".day-one-humid").innerHTML =
            "hum: " + data.daily[0].humidity;
          //fdf day two
          document.querySelector(".day-two-temp").innerHTML =
            "temp: " + data.daily[1].temp.day;
          document.querySelector(".day-two-wind").innerHTML =
            "wind: " + data.daily[1].wind_speed;
          document.querySelector(".day-two-humid").innerHTML =
            "hum: " + data.daily[1].humidity;
          //fdf day three
          document.querySelector(".day-three-temp").innerHTML =
            "temp: " + data.daily[2].temp.day;
          document.querySelector(".day-three-wind").innerHTML =
            "wind: " + data.daily[2].wind_speed;
          document.querySelector(".day-three-humid").innerHTML =
            "hum: " + data.daily[2].humidity;
          //fdf day four
          document.querySelector(".day-four-temp").innerHTML =
            "temp: " + data.daily[3].temp.day;
          document.querySelector(".day-four-wind").innerHTML =
            "wind: " + data.daily[3].wind_speed;
          document.querySelector(".day-four-humid").innerHTML =
            "hum: " + data.daily[3].humidity;
          //fdf day five
          document.querySelector(".day-five-temp").innerHTML =
            "temp: " + data.daily[4].temp.day;
          document.querySelector(".day-five-wind").innerHTML =
            "wind: " + data.daily[4].wind_speed;
          document.querySelector(".day-five-humid").innerHTML =
            "hum: " + data.daily[4].humidity;
        });

        
function setToLocal() {
    localStorage.setItem("history", searchInput.value);
  }
  
  searchHistory();