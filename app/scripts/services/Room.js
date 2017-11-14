(function() {
    function Room($firebaseArray, room) {
       var Room = {};
       var ref = firebase.database().ref().child("rooms");
       var rooms = $firebaseArray(ref);

       Room.all = rooms;

       Room.add = function(room) {
           rooms.$add(room);
       }

       return Room;
    }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', 'room', Room]);
})();
