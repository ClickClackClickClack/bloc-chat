(function() {
  function PromptCtrl(Room, $uibModalInstance, User) {
     this.add = function(){
       User.add();
       $uibModalInstance.dismiss('cancel');
     }
  }


angular
    .module('blocChat')
    .controller('PromptCtrl', ['Room', '$uibModalInstance', 'User', PromptCtrl]);
})();
