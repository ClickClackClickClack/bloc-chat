(function() {
    function User($cookies) {
       var User = {};

       User.add = function(){
         var user = document.getElementById('enteruser').value;
         console.log(user);
         if(!user === ''){
             $cookies.put('blocChatCurrentUser', user);
         }
       }


       return User;
    }

  angular
    .module('blocChat')
    .factory('User', ['$cookies', User]);
})();
