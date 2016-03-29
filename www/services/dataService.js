angular
  .module('app.services', [])
  .factory('dataService', function ($http) {
    var service = {};

    service.apiWeather = function(city) {
      console.log(city);
      //return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e9d20812185bcb41aa65bb443b85ad5f');
      return $http.get('http://api.openweathermap.org/data/2.5/forecast/city?q=' + city + '&APPID=e9d20812185bcb41aa65bb443b85ad5f');
    };

    return service;
  });
