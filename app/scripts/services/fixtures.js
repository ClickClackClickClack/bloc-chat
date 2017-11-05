(function() {
     function Fixtures() {
         var Fixtures = {};

         var room = {};

         return Fixtures;
     }

     angular
         .module('blocChat')
         .factory('Fixtures', Fixtures);
 })();
