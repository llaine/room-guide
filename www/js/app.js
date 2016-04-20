// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'pascalprecht.translate', 'ionic-audio', 'ngCordova'])

  .run(function ($ionicPlatform, $cordovaGlobalization, $translate, $rootScope, RoomsFactory) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      $cordovaGlobalization.getPreferredLanguage().then(
        function (result) {
          var language = result.value.split("-")[0];
          $translate.use(language).then(function (data) {
            console.log('success: ' + data);
          }, function (error) {
            console.log('error: ' + error);
          });
        });
    });

    $rootScope.rooms = RoomsFactory.getRooms('en');
  })
  .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        cache: false,
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl',
        controllerAs: 'mainCtrl'
      })
      .state('app.home', {
        url: '/home/',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'homeCtrl'
          }
        }
      })
      .state('app.about', {
        url: '/about/',
        views: {
          'menuContent': {
            templateUrl: 'templates/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'aboutCtrl'
          }
        }
      })
      .state('app.room', {
        url: '/rooms/:roomId',
        views: {
          'menuContent': {
            templateUrl: 'templates/room.html',
            controller: 'RoomCtrl',
            controllerAs: 'roomCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home/');
  })
  .filter('capitalize', function () {
    return function (input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
