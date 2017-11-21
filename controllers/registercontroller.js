const app = angular.module('myApp');
    app.config(function($routeProvider){
          $routeProvider
            .when('/', {
                  templateUrl: 'index.html'
            })
            .when('register.html', {
                  templateUrl: 'register.html'
            })
          .otherwise({
                redirectTo: '/'
          })
    })

  app.controller('registerController', function($scope, $location){
        $scope.submit = function(){
            const fname = $scope.fullName;
            const emailAddress = $scope.emailAddress;
            const password = $scope.password;
                if($scope.fullName == 'admin' && $scope.emailAddress == 'admin' && $scope.password == 'admin') {
                      $location.path('/register.html')
                }
        }
  });
