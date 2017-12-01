(function() {
  angular.module('myApp', ['ngRoute']);

   function config($routeProvider, $locationProvider) {
     $routeProvider
       .when('/', {
         templateUrl: 'index.html',
         controller: 'homeCtrl',
         controllerAs: 'vm'
       })
       .when('/register', {
         templateUrl: '/view/register.html',
         controller: 'registerCtrl',
         controllerAs: 'vm'
       })
       .when('/login', {
         templateUrl: '/view/login.html',
         controller: 'loginCtrl',
         controllerAs: 'vm'
       })
       .when('/profile', {
         templateUrl: '/profile',
         controller: 'profileCtrl',
         controllerAs: 'vm'
       })
       .otherwise({redirectTo: '/'});

       //Use this HTML5 History api
       $locationProvider.html5Mode(true);
   }

   function run($rootScope, $location, authentication) {
     $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
       if ($location.path() ==='/profile' && !authentication.isLoggedIn()) {
         $location.path('/');
       }
     });
   }

   angular
    .module('myApp')
    .config(['$routeProvider', '$locationProvider', config])
    .run(['$rootScope', '$location', 'authentication', run]);
})();
