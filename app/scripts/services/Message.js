(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);



    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
       return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };

    Message.send = function(){
      //var message = document.getElementById('message-text').value;
      //console.log(message);
    };

    return Message;
    };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
