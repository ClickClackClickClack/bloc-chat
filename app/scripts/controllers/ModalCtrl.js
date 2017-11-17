(function() {
  function ModalCtrl(Room, $uibModalInstance) {
    this.close = function () {
        $uibModalInstance.dismiss('cancel');
    };

    this.add = Room.add;

  }


angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
