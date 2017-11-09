 let app = angular.module( 'myApp', []);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateURL: 'Public/view/main.html'
        })

        .when('/main', {
              templateURL: '/Public/view/main.html'
        })

        .when("/event", {
            templateURL: 'Public/view/event.html'
        })
})

// This is Theresa's event list
app.controller("searchBoxCtrl", function($scope){
      $scope.eventFinder = [
                  { 'names':'Infosys Technologies',
                    'address': '400 Bagley St, Detroit, Michigan 48226',
                     'price': 125000  },
                    { 'names':'Cognizant Technologies',
                      'employees': 100000,
                      'headoffice': 'Bangalore'},
                      { 'names':'Wipro',
                        'employees': 115000,
                        'headoffice': 'Bangalore'},
                        { 'names':'Tata Consultancy Services (TCS)',
                          'employees': 150000,
                          'headoffice': 'Bangalore'},
                          { 'names':'HCL Technologies',
                            'employees': 90000,
                            'headoffice': 'Noida'},


      ];
      $scope.addRow = function(){
            	$scope.eventFinder.push({ 'names':$scope.names, 'events': $scope.events, 'price':$scope.price });
            	$scope.names ='';
            	$scope.events ='';
            	$scope.price ='';
            };

     $scope.removeRow = function(names){
            var remove = -1;//this remove variable is apart of if statment
            var comArr = eval( $scope.eventFinder );// is needed in the For loop.

            for ( var i = 0; i < comArr.length; i++ ) {
               if ( comArr[i].names === names ) {
                        remove = i;
                        break;
               }
            }
            if( comArr === -1 ){
                alert( "Something gone wrong" );
            }
            $scope.eventFinder.splice( remove, 1 );
     };    //end of eventlist
});
