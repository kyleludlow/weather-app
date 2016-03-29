angular
  .module('app')

  .controller('searchWeatherByCity',

    function ($scope, dataService) {
      $scope.weather = '';
      $scope.windSpeed = '';
      $scope.city = '';
      $scope.name = 'name';
      $scope.weatherIcon = '';

      $scope.searchWeather = function(city) {
        console.log();
        dataService.apiWeather(city).then(function (result) {
          if(result.data.cod == 200) {
            console.log(result);
            $scope.weather = result.data.list[0].weather[0].description;
            $scope.weatherIcon = 'http://openweathermap.org/img/w/'+ result.data.list[0].weather[0].icon + '.png';
            console.log($scope.weatherIcon);
            $scope.windSpeed = result.data.list[0].wind.speed;
          } else {
            alert(result.data.message);
          }
        });
      }
    });
