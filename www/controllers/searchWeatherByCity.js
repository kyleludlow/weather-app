angular
  .module('app')

  .controller('searchWeatherByCity',

    function ($scope, dataService) {
      $scope.weather = '';
      $scope.windSpeed = '';
      $scope.city = '';
      $scope.weatherIcon = '';

      $scope.searchWeather = function(city) {
        dataService.apiWeather(city).then(function (result) {
          if(result.data.cod == 200) {
            $scope.weather = result.data.list[0].weather[0].description;
            $scope.weatherIcon = 'http://openweathermap.org/img/w/'+ result.data.list[0].weather[0].icon + '.png';
            $scope.windSpeed = result.data.list[0].wind.speed;
          } else {
            alert(result.data.message);
          }
        });
      };

      navigator.geolocation.getCurrentPosition(
        function(pos) {
          var geocoder = new google.maps.Geocoder();
          var lat = pos.coords.latitude;
          var lng = pos.coords.longitude;
          var latlng = new google.maps.LatLng(lat, lng);

          //reverse geocode the coordinates, returning location information.
          geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            var result = results[0];
            var city = '';
            var individualComponent = '';

            for (var i = 0; i < result.address_components.length; i++) {
              individualComponent = result.address_components[i];

              if (individualComponent.types.indexOf("locality") >= 0) {
                city = individualComponent.short_name;
                break;
              }
            }

            $scope.searchWeather(city);
          });
        },
        function(err) {
          alert("Something happened " + err);
        });
    }
  );


navigator.geolocation.getCurrentPosition(function (pos) {

});
