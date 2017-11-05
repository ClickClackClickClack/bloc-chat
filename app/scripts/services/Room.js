(function() {
    function Room($firebaseArray, Fixtures) {
       var Room = {};
       var ref = firebase.database().ref().child("rooms");
       var rooms = $firebaseArray(ref);

       Room.all = rooms;

       Room.add = function(room) {
          return rooms.$add(room);
       }

       return Room;
    }
    
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', 'Fixtures', Room]);
})();
