let eventApp = angular.module('eventApp', ['ngResources', 'ui.route']);

//angular routing view pages
eventApp.config(['$stateProvider', ($stateProvider) => {
  $stateProvider
  .state('red', {
    url:'/red.html'
    templateUrl:"/Public/views/red.html"
  })
  .state('blue', {
    url:'/blue.html'
    templateUrl:"/Public/views/blue.html"
  })
  .state('green', {
    url:'/green.html'
    templateUrl:"/Public/views/green.html"
  })
  .state('login', {
    url:'/login.html'
    templateUrl:"/Public/views/login.html"
  })
  .state('events', {
    url:'/events.html'
    templateUrl:"/Public/views/addEvent.html"
  })
}]);
