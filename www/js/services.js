angular.module('starter.services', [])
  .factory('AudioFactory', function() {
    /**
     * Simple function which returns an array of songs
     * based on the room id's number.
     * TODO : Change by async $http request and dynamic switch/case
     * @param idRoom
     */
    function getSongs(idRoom) {
      var songs = [];
      switch(idRoom) {
        case 1:
          return [
            {
              url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3',
              artist: 'The Police',
              title: 'Message in a bottle',
              art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
            }
          ];
          break;
        case 2:
          return [
            {
              url: 'https://ionic-audio.s3.amazonaws.com/Roxane.mp3',
              artist: 'The Police',
              title: 'Roxane',
              art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
            },
            {
              url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3',
              artist: 'The Police',
              title: 'Message in a bottle',
              art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
            }
          ];
        default:
          return songs;
      }
    }

    return {
      /**
       * Public API for the AudioFactory's songs catcher.
       * @param idRoom
       * @returns {*}
       */
      getSongsForRoom: function(idRoom) {
        return getSongs(idRoom);
      }
    }
  });
