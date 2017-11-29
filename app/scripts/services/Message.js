(function() {
  function Message($firebaseArray, scribe, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
       return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };

    Message.send = function(newMessage, roomId){
      var letter = scribe;
      var currentUser = $cookies.get('blocChatCurrentUser');
      letter.content = newMessage;
      letter.roomId = roomId;
      letter.username = currentUser;
      messages.$add(letter);
    };

    return Message;
    };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'scribe', '$cookies', Message]);
})();
