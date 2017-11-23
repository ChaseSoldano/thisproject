const app = angular.module('myApp');
    app.config(function($routeProvider){
          $routeProvider
            .when('/', {
                  templateUrl: 'index.html'
            })
            .when('login.html', {
                  templateUrl: 'login.html'
            })
          .otherwise({
                redirectTo: '/'
          })
    })

    app.controller('loginController', function($scope, $location){
          $scope.submit = function(){
              const uname = $scope.username;
              const password = $scope.password;
                  if($scope.username == 'admin' && $scope.password == 'admin') {
                        $location.path('/index.html')
                  }
          }
    });
