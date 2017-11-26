(function() {
  function PromptCtrl(Room, $uibModalInstance, $cookies) {
     this.add = function(){
       var user = document.getElementById('enteruser').value;
       console.log(user);
       if(user !== ''){
           $cookies.put('blocChatCurrentUser', user);
           $uibModalInstance.dismiss('cancel');
       }

       //$uibModalInstance.dismiss('cancel');
     }
  }


angular
    .module('blocChat')
    .controller('PromptCtrl', ['Room', '$uibModalInstance', '$cookies', PromptCtrl]);
})();
