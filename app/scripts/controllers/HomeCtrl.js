(function() {
    function HomeCtrl(Room, $uibModal, $scope, Message) {
      this.rooms = Room.all;
      this.messages = Message.all;
      this.open = function(){
        $uibModal.open({
          templateUrl: 'templates/modal.html',
          controller: 'ModalCtrl',
          controllerAs: '$modal',
          windowClass: 'window'
         });
      }

      $scope.active = null;

      this.switch = function(index){
        $scope.active = this.rooms[index].name;
      }

      this.getByRoomId = function(index) {
        var RoomID = this.rooms[index].$id;
         //console.log(RoomID);
         //console.log(this.messages);
         Message.getByRoomId(RoomID);
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', 'Message', HomeCtrl]);
})();
