(function() {
  function ModalCtrl(Room, $uibModalInstance, room) {
    this.close = function () {
        $uibModalInstance.dismiss('cancel');
    };

    this.add = function() {
        Room.add(room);
    };
  }


angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', 'room', ModalCtrl]);
})();
