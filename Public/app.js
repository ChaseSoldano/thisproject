let eventApp = angular.module( 'eventApp', ['ngResource', 'ui.router']);

// angular.module('app', ['ngResource']);

// angular routing view pages.
eventApp.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
    .state('red', {
        url: '/red',
        templateUrl: '/Public/views/red.html',
        controller: () => console.log('We are in red state')
    })
    .state('blue', {
        url: '/blue',
        templateUrl: '/Public/views/blue.html'
    })
    .state('green', {
        url: '/green',
        templateUrl: '/Public/views/green.html'
    })
    .state('events', {
        url: '/events',
        templateUrl: '/Public/views/addEvent.html'
    })
    .state('login', {
        url: '/login',
        templateUrl: '/Public/views/login.html'
    })
}]);


//end of angular routing.
// var express = require('express');
// var path = require('path');
// var favicon = require('server-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var passport = require('passport');
//
// require('./app_api/models/db');
// require('./app_api/config/passport');
//
// app.use(passport.initialize());
// app.use('/api', routesApi);
//
// //error handlers
// //catch unauthorised errors
//
// app.use(function(err, req, res, next) {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401);
//     res.json({"message": err.name +": " + err.message});
//   }
// });
// // search box for the users to type in there location and also add.
//
// app.controller("searchBoxCtrl", function($scope){
//       $scope.eventFinder = [
//                   { 'names':'Infosys Technologies',
//                     'address': '400 Bagley St, Detroit, Michigan 48226',
//                      'price': 125000  },
//                     { 'names':'Cognizant Technologies',
//                       'employees': 100000,
//                       'headoffice': 'Bangalore'},
//                       { 'names':'Wipro',
//                         'employees': 115000,
//                         'headoffice': 'Bangalore'},
//                         { 'names':'Tata Consultancy Services (TCS)',
//                           'employees': 150000,
//                           'headoffice': 'Bangalore'},
//                           { 'names':'HCL Technologies',
//                             'employees': 90000,
//                             'headoffice': 'Noida'},
//
//
//       ];
//       $scope.addRow = function(){
//             	$scope.eventFinder.push({ 'names':$scope.names, 'events': $scope.events, 'price':$scope.price });
//             	$scope.names ='';
//             	$scope.events ='';
//             	$scope.price ='';
//             };
//
//      $scope.removeRow = function(names){
//             var remove = -1;//this remove variable is apart of if statment
//             var comArr = eval( $scope.eventFinder );// is needed in the For loop.
//
//             for ( var i = 0; i < comArr.length; i++ ) {
//                if ( comArr[i].names === names ) {
//                         remove = i;
//                         break;
//                }
//             }
//             if( comArr === -1 ){
//                 alert( "Something gone wrong" );
//             }
//             $scope.eventFinder.splice( remove, 1 );
//      };
// });
