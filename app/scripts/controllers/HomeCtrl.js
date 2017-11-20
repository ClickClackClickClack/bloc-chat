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
        $scope.active = this.rooms[index].name;
        
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();
