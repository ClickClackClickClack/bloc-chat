(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    console.log(messages);
    Message.all = messages;

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
      console.log(messages);
      var listOfMessages = messages.orderByChild("roomId").equalTo(roomId);
      console.log(listOfMessages);
    };

    return Message;
    };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
