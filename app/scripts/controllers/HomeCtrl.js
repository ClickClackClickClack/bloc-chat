(function() {
    function HomeCtrl(Room, $uibModal, $scope, Message) {
      this.rooms = Room.all;
      this.messages = null;
      this.open = function(){
        $uibModal.open({
          templateUrl: 'templates/modal.html',
          controller: 'ModalCtrl',
          controllerAs: '$modal',
          windowClass: 'window'
         });
      }

      $scope.active = null;

      $scope.id = null;

      this.switch = function(index){
        $scope.active = this.rooms[index].name;
        $scope.id = this.rooms[index].$id;
      }

      this.getByRoomId = function(index) {
        var RoomID = this.rooms[index].$id;
        this.messages = Message.getByRoomId(RoomID);
      }

      this.send = function() {
        var message = document.getElementById('message-text').value;
        var RoomID = $scope.id;
        Message.send(message, RoomID);
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', 'Message', HomeCtrl]);
})();
