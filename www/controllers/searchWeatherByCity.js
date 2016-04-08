angular
  .module('app')

  .controller('searchWeatherByCity',

    function ($scope, dataService) {
      $scope.weather = '';
      $scope.windSpeed = '';
      $scope.city = '';
      $scope.weatherIcon = '';
      $scope.iconColor = 'white-icons';
      $scope.temperature = '';
      $scope.humidity = '';
      $scope.cityName = '';


      var backgroundImage = '';
      var textColor = 'white';
      var svgColor = 'white';

      var d = new Date();
      var n = d.getHours();
      switch (true) {
        case (n < 7):
          backgroundImage = 'url(../img/backgrounds/night.jpg)';
          break;
        case (n >= 7 && n < 12):
          backgroundImage = 'url(../img/backgrounds/morning.jpg)';
          break;
        case (n >= 12 && n < 20):
          backgroundImage = 'url(../img/backgrounds/sunny.jpg)';
          textColor = 'black';
          $scope.iconColor = 'black';
          break;
        case (n >= 20):
          backgroundImage = 'url(../img/backgrounds/night.jpg)';
          break;
        default:
          alert("Error");
          break;
      }


      $('#home-view-body').css('backgroundImage', backgroundImage);
      $('h2, h3').css('color', textColor);







      $scope.searchWeather = function(city) {
        dataService.apiWeather(city).then(function (result) {
          if(result.data.cod == 200) {
            console.log(result);
            $scope.weather = result.data.list[0].weather[0].description;
            $scope.weatherIcon = result.data.list[0].weather[0].icon + '.png';
            $scope.windSpeed = result.data.list[0].wind.speed;
            $scope.temperature = result.data.list[0].main.temp - 273.15;
            $scope.humidity = result.data.list[0].main.humidity;
            $scope.cityName = result.data.city.name;
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
