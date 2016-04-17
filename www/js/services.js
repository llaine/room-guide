angular.module('starter.services', [])
  .factory('RoomsFactory', function () {
    var frRooms = [
      {
        name: 'Salle 1',
        description: 'Description room sample [FR]',
        art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg',
        songs: [
          {
            title: 'Message in a bottle [FR]',
            artist: 'The Police',
            url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3'
          },
          {
            title: 'Roxane [FR]',
            artist: 'The Police',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
          }
        ]
      },{
        name: 'Salle 2',
        description: 'Description room sample [FR]',
        art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg',
        songs: [
          {
            title: 'Roxane [FR]',
            artist: 'The Police',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
          }
        ]
      }
    ];
    var enRooms = [
      {
        name: 'Room 1',
        description: 'Description room sample [EN]',
        art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg',
        songs: [
          {
            title: 'Message in a bottle [EN]',
            artist: 'The Police',
            url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3'
          },
          {
            title: 'Roxane [EN]',
            artist: 'The Police',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
          }
        ]
      },{
        name: 'Room 2',
        description: 'Description room sample [EN]',
        art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg',
        songs: [
          {
            title: 'Roxane [EN]',
            artist: 'The Police',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
          }
        ]
      }
    ];


    function getRooms(locale) {
      switch (locale){
        case 'fr':
          return frRooms;
        case 'en':
          return enRooms;
      }
    }

    return {
      /**
       * Public API for the AudioFactory's songs catcher.
       * @param locale
       * @returns {*}
       */
      getRooms: function (locale) {
        console.log('getRooms');
        return getRooms(locale)
      }
    }
  });
