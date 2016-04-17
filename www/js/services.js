angular.module('starter.services', [])
  .factory('AudioFactory', function () {
    function getRoom(idRoom) {
      switch (idRoom) {
        case 1:
          return {
            name: 'Room1',
            description: 'Description room sample',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg',
            songs: [
              {
                title: 'Message in a bottle',
                artist: 'The Police',
                url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3'
              },
              {
                title: 'Roxane',
                artist: 'The Police',
                art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
              }
            ]
          };
        case 2:
          return {
            name: 'Room1',
            description: 'Description room sample',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg',
            songs: [
              {
                title: 'Roxane',
                artist: 'The Police',
                art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
              }
            ]
          };
        default:
          return {};
      }
    }

    return {
      /**
       * Public API for the AudioFactory's songs catcher.
       * @param idRoom
       * @returns {*}
       */
      getSongsForRoom: function (idRoom) {
        return getRoom(idRoom).songs;
      },
      getRoom: function (idRoom) {
        return getRoom(idRoom);
      }
    }
  });
