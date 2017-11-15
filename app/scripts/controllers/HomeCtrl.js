(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;
      this.open = function(){
         $uibModal.open({
          templateUrl: 'modal.html',
          controller: 'ModalCtrl',
          windowClass: 'window'
         });
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
