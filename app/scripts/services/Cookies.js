(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: 'templates/prompt.html',
        controller: 'PromptCtrl',
        controllerAs: '$prompt',
        windowClass: 'window'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
