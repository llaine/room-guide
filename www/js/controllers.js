angular.module('starter.controllers', [])

  .controller('AppCtrl', function () {
    var self = this;

    self.rooms = [
      {title: 'Room1', id: 1},
      {title: 'Room2', id: 2},
      {title: 'Room3', id: 3},
      {title: 'Room4', id: 4},
      {title: 'Room5', id: 5},
      {title: 'Room6', id: 6}
    ];
  })

  .controller('RoomCtrl', function ($scope, $stateParams) {
    var self = this;

    self.roomId = $stateParams.roomId;

    self.records = [
      {title: 'Record1', id: 1},
      {title: 'Record2', id: 2},
      {title: 'Record3', id: 3},
      {title: 'Record4', id: 4},
      {title: 'Record5', id: 5},
      {title: 'Record6', id: 6}
    ];
  });
