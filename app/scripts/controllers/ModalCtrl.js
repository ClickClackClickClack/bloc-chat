(function() {
  function ModalCtrl(Room, $uibModalInstance) {
    this.close = function () {
        console.log('Modal Controller Taking Over');
        $uibModalInstance.dismiss('cancel');
    };

  }


angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
