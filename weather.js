// Variables
var cityInput = $('#city-search')
var cityInput = "Stockholm"

// Main Content in Jumbotron
var mainWeatherTitle = $('#main-title')
var mainWeatherTemp = $('#main-temp')
var mainWeatherHumidity = $('#main-humidity')
var mainWeatherWind = $('#main-wind')
var mainWeatherUV = $('#main-UV')

// 5-Day Forecast in Cards
var fiveDayTitle = $('#5-day title');
var fiveDayImage = $('#5-day img')
var fiveDayTemp = $('#5-day temp')
var fiveDayHUmidity = $('#5-day humidity')

var APIKey = "3a92bc0a0ca29575a3569a00c0268022";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + cityInput + "&units=imperial&APPID=" + APIKey;


function renderMainData() {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);

            var main = response.name;
            var mainTemp = response.main.temp;
            var mainHumidity = response.main.humidity;
            var mainWind = response.wind.speed;
            //    UV is a seperate call putting in country for the time being
            var mainUv = response.sys.country;

            mainWeatherTitle.text(main);
            mainWeatherTemp.text('Temp: ' + mainTemp);
            mainWeatherHumidity.text('Humidity: ' + mainHumidity);
            mainWeatherWind.text('Wind Speed: ' + mainWind);
            mainWeatherUV.text('UV Index: ' + mainUv);
        });
}
renderMainData();