angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($rootScope) {

  })

  .controller('RoomCtrl', function ($stateParams, $rootScope, $interval, $cordovaMedia) {
    var self = this;
    var media = null;
    var isPause = false;
    var timer;

    function _init() {
      var roomIdParsed = parseInt($stateParams.roomId);
      self.room = $rootScope.rooms[roomIdParsed - 1];
      self.tracks = $rootScope.rooms[roomIdParsed - 1].songs;
    }

    function initTimer() {
      timer = $interval(function() {
        media.currentTime().then(function(position) {
          console.info('position', JSON.stringify(position));
        })
      }, 1000);
    }

    function clear() {
      if (angular.isDefined(mediaTimer)) {
        $interval.cancel(timer);
        timer = undefined;
      }

      media = null;
      isPause = false
    }

    self.playTrack = function(url) {
      if (!media) {
        console.info('Playing new song');
        media = $cordovaMedia.newMedia(url);
        media.play();
        initTimer();
      }
    };

    self.stopPlaying = function() {
      if (media) {
        console.info('Stop playing current song');
        media.stop();
        clear();
      }
    };

    self.pauseTrack = function() {
      console.info('Pausing current track');
      if (isPause && media) {
        media.play();
      } else if (media && !isPause) {
        media.pause();
      }
      isPause = !isPause
    };

    _init();
  })

  .controller('HomeCtrl', function ($translate, $ionicHistory, $rootScope, RoomsFactory) {
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
