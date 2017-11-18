(function() {
    function Room($firebaseArray, room) {
       var Room = {};
       var ref = firebase.database().ref().child("rooms");
       var rooms = $firebaseArray(ref);
       Room.all = rooms;

       Room.add = function(room) {
           var name = document.getElementById('nameroom').value;
           console.log(name);
           room.name = name;
           console.log(room);
           rooms.$add(room);
       }

       return Room;
    }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', 'room', Room]);
})();
