angular.module('starter.controllers', [])
  .controller('AppCtrl', function ($rootScope) {

  })
  .controller('RoomCtrl', function ($stateParams, $rootScope) {
    var self = this;
    self.track = null;

    function _init() {
      var roomIdParsed = parseInt($stateParams.roomId);
      self.room = $rootScope.rooms[roomIdParsed - 1];
      self.tracks = $rootScope.rooms[roomIdParsed - 1].songs;
      self.position = 0;
    }

    _init();

    $rootScope.$watch('track', function(newValue, oldValue, scope) {
      if(oldValue) {
        self.track = self.tracks[self.position];
        ++self.position;
      }
    })
  })
  .controller('HomeCtrl', function ($translate, $ionicHistory, $rootScope, $state, RoomsFactory) {
    var self = this;

    function _init() {
      self.changeLanguage = changeLanguage;
    }

    function changeLanguage(lang) {
      $ionicHistory.clearHistory();
      $ionicHistory.clearCache().then(function () {
        $translate.use(lang);
        $rootScope.rooms = RoomsFactory.getRooms(lang);
        $state.go('app.home');
      });
    }

    _init();
  })
  .controller('AboutCtrl', function () {

  });
