var apiKey = "7962c0dd481899773880cb86300b5061";
var location = "";
var searchLocation = document.selectbyID("#searchme");
var CurrentTemp= $('#temp');
var CurrentHumidity = $('#humidity')
var CurrentWind = $('wind')
var CurrentIcon =$('#Icon')
var CurrentDate =$('#date')


function wonderNoMore(event){
    event.preventDefault();
    if (searchLocation.val().trim()!==""){
        location = searchLocation.val().trim();
        reportWeather(location);
    }
}

function reportWeather(location) {
    var activeAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + ApiKey + "&units=imperial";
    $.ajax({
    url:activeAPI,
    method:"GET"
    }).then(function(response){
    var weatherImg = response.weather[0].icon;
    var forecastImg= "https://openweathermap.org/img/wn/" + weatherImg + '@2x.png';
    var date = new Date(response.dt*1000).toLocaleDateString();
    $(cityCurrent).html( "<img src="+forecastImg+">"+response.name);
    $(date1).html(date)
    $(temp).html("Temp: " + response.main.temp + "°")
    $(humidity).html("Humidity: "+response.main.humidity+ "%")
    $(wind).html("Wind: " + response.wind.speed + " MPH")
    fiveDayForecast()
  });
}

function fiveDayForecast(){
    var weekahead= 'https://api.openweathermap.org/data/2.5/forecast?q='+ city + '&appid=' + ApiKey+ "&units=imperial";
    $.ajax({
      url:weekahead,
      method:"GET"
    }).then(function(response){
      let weatherFirst = response.list[7].weather[0].icon;
      let firstDay =  "https://openweathermap.org/img/wn/" + weatherFirst + '@2x.png';
      $(cityCurrent1).html(response.city.name + "<img src=" + firstDay + ">");
      $(date2).html(response.list[7].dt_txt)
      $(temp1).html("Temperature: " + response.list[7].main.temp + "°")
      $(humidity1).html("Humidity: "+response.list[7].main.humidity+ "%")
      $(wind1).html("Wind: " + response.list[7].wind.speed + " MPH")
      
      let weatherSecond = response.list[15].weather[0].icon;
      let secondDay =  "https://openweathermap.org/img/wn/" + weatherSecond + '@2x.png';
      $(cityCurrent2).html(response.city.name + "<img src=" + secondDay + ">");
      $(date3).html(response.list[15].dt_txt)
      $(temp2).html("Temperature: " + response.list[15].main.temp + "°")
      $(humidity2).html("Humidity: "+response.list[15].main.humidity+ "%")
      $(wind2).html("Wind: " + response.list[15].wind.speed + " MPH")
  
      let weatherThird= response.list[23].weather[0].icon;
      let thirdDay =  "https://openweathermap.org/img/wn/" + weatherThird + '@2x.png';
      $(cityCurrent3).html(response.city.name + "<img src=" + thirdDay + ">");
      $(date4).html(response.list[23].dt_txt)
      $(temp3).html("Temperature: " + response.list[23].main.temp + "°")
      $(humidity3).html("Humidity: "+response.list[23].main.humidity+ "%")
      $(wind3).html("Wind: " + response.list[23].wind.speed + " MPH")
  
      let fourthDay = response.list[31].weather[0].icon;
      let weatherFourth =  "https://openweathermap.org/img/wn/" + fourthDay + '@2x.png';
      $(cityCurrent4).html(response.city.name + "<img src=" + weatherFourth + ">");
      $(date5).html(response.list[31].dt_txt)
      $(temp4).html("Temperature: " + response.list[31].main.temp + "°")
      $(humidity4).html("Humidity: "+response.list[31].main.humidity+ "%")
      $(wind4).html("Wind: " + response.list[31].wind.speed + " MPH")
  
      let finalDay= response.list[39].weather[0].icon;
      let weatherFifth =  "https://openweathermap.org/img/wn/" + finalDay + '@2x.png';
      $(cityCurrent5).html(response.city.name + "<img src=" + weatherFifth + ">");
      $(date6).html(response.list[39].dt_txt)
      $(temp5).html("Temperature: " + response.list[39].main.temp + "°")
      $(humidity5).html("Humidity: "+response.list[39].main.humidity+ "%")
      $(wind5).html("Wind: " + response.list[39].wind.speed + " MPH")
    })
  }

  $('#form-submit').on('click', wonderNoMore);