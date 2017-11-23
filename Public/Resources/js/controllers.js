eventApp.controller("eventsController", ['$scope', '$resource',
  ($scope,$resource) => {
    let Event = $resource('/events');

    Event.query((results) => {
      $scope.events = results;
    });

    $scope.addEvent = () => {
      let event = new Event();
      event.name = $scope.name;
      event.date = $scope.date;
      event.location = $scope.location;
      event.description = $scope.description;
      event.$save((result) => {
        $scope.events.push(result);
        $scope.name = '';
        $scope.date = '';
        $scope.location = '';
        $scope.description = '';
      });
    }
}]);
