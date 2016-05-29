angular.module('starter.controllers', [])
  .controller('AppCtrl', function ($rootScope) {

  })
  .controller('RoomCtrl', function ($stateParams, $rootScope, $scope, $timeout) {
    var self = this;
    
    $scope.dynamicTrack = {};

    function _init() {
      var roomIdParsed = parseInt($stateParams.roomId);
      self.room = $rootScope.rooms[roomIdParsed - 1];
      self.tracks = $rootScope.rooms[roomIdParsed - 1].songs;
      self.position = 0;
    }
    
    function nextTrack() {
      var newPosition = self.position + 1;
      var positionExists = self.tracks[newPosition];
       
      if(positionExists) {        
        console.log('Will switch to next one ..');
        
        $scope.playTrack(newPosition);
        $scope.togglePlayback = !$scope.togglePlayback;
         
        // Removing the ion-pause class
        $timeout(function() { 
          var tagName = 'track-' + (newPosition - 1);
          angular.element(document.getElementById(tagName)).toggleClass('ion-play ion-pause')
        }, 1000)
        
      } else {
        // End of the playlist
        self.position = 0;
        $scope.playTrack(0);
      }
    }
    
    
    $scope.playTrack = function(position) {
      console.log('Playing ...', position)
      $scope.dynamicTrack = self.tracks[position];
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
