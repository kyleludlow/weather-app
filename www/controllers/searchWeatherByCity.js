angular
  .module('app')

  .controller('searchWeatherByCity',

    function ($scope, dataService, $http) {
      $scope.weather = '';
      $scope.windSpeed = '';
      $scope.city = '';
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
      };

      var onSuccess = function(position) {
        console.log(position);
        var lat = Math.floor(position.coords.latitude);
        var long = Math.floor(position.coords.longitude);

        //alert('Latitude: '          + position.coords.latitude          + '\n' +
        //  'Longitude: '         + position.coords.longitude         + '\n' +
        //  'Altitude: '          + position.coords.altitude          + '\n' +
        //  'Accuracy: '          + position.coords.accuracy          + '\n' +
        //  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        //  'Heading: '           + position.coords.heading           + '\n' +
        //  'Speed: '             + position.coords.speed             + '\n' +
        //  'Timestamp: '         + position.timestamp                + '\n');
        return $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=e9d20812185bcb41aa65bb443b85ad5f');

      };

// onError Callback receives a PositionError object
//
      function onError(error) {
        alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
      }

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  );
