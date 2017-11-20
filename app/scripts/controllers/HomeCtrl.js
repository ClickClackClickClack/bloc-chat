(function() {
    function HomeCtrl(Room, $uibModal, $scope) {
      this.rooms = Room.all;
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
        var currentRoom = this.rooms[index].name;
        console.log(currentRoom);
        $scope.active = currentRoom;
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();
