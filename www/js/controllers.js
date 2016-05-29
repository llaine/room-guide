angular.module('starter.controllers', [])
  .controller('AppCtrl', function ($rootScope) {

  })
  .controller('RoomCtrl', function ($stateParams, $rootScope, $scope) {
    var self = this;

    function _init() {
      var roomIdParsed = parseInt($stateParams.roomId);
      self.room = $rootScope.rooms[roomIdParsed - 1];
      self.tracks = $rootScope.rooms[roomIdParsed - 1].songs;
      self.position = 0;
    }
    
    function nextTrack() {
      self.position++;
      var nextTrack = self.tracks[self.position];
      
      if(nextTrack) {
        console.log('Will switch to next one ..')
        self.playTrack(nextTrack);
      } else {
        // End of the playlist
        self.position = 0;
      }
    }
    
    self.playTrack = function(track) {
      console.log(self.track);
      // TODO fonctionne pas
      self.track = track;
    }
    
    _init();
    
    $rootScope.$on('track.stopped', function (e, shouldSwitch) {
      if(shouldSwitch) {
        nextTrack();
      }
    });
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
