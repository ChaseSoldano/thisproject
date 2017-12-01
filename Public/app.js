let eventApp = angular.module('eventApp', ['ngResource', 'ui.router']);

//angular routing view pages
eventApp.config(['$stateProvider', ($stateProvider) => {
  $stateProvider
  .state('red', {
    url:'/red',
    templateUrl:"/Public/views/red.html",
    controller: () => console.log('we are in red')
  })
  .state('blue', {
    url:'/blue',
    templateUrl:"/Public/views/blue.html"
  })
  .state('green', {
    url:'/green',
    templateUrl:"/Public/views/green.html"
  })
  .state('login', {
    url:'/login',
    templateUrl:"/Public/views/login.html"
  })
  .state('events', {
    url:'/events',
    templateUrl:"/Public/views/addEvent.html"
  })
}]);
