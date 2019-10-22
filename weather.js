// Variables
var cityInput = $('#city-search')
var mainWeatherEL = $('.main')
var fiveDayEL = $('.5-day')

function buildQueryURL() {
    var APIKey = "3a92bc0a0ca29575a3569a00c0268022";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" + cityInput + "&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);
    });
}

function renderData(){

}
