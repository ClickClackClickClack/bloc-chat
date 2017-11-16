(function() {
    function HomeCtrl(Room, $uibModal) {
      console.log('Home Controller Son');
      this.rooms = Room.all;
      this.open = function(){
        $uibModal.open({
          templateUrl: 'templates/modal.html',
          controller: 'ModalCtrl',
          controllerAs: '$modal',
          windowClass: 'window'
         });
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
