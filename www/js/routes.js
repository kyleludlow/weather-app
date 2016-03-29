angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'searchWeatherByCity'
      }
    }
  })

  .state('menu.localWeather', {
    url: '/local-weather',
    views: {
      'side-menu21': {
        templateUrl: 'templates/localWeather.html',
        controller: 'localWeatherCtrl'
      }
    }
  })

  .state('menu.searchWeatherByCity', {
    url: '/weather-by-city',
    views: {
      'side-menu21': {
        templateUrl: 'templates/searchWeatherByCity.html',
        controller: 'searchWeatherByCity'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.accountSettings', {
    url: '/account-settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/accountSettings.html',
        controller: 'accountSettingsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')



});
