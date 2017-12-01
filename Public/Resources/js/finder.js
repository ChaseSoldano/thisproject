class Appfinder {
  constructor() {
    var myPlaces = this;

    myPlaces.foundItemsArray = []
    myPlaces.AppfinderArray = [
    {text: "art places ", done: false},
    {text: "food locator", done: false},
    {text: "Gamers places", done: false}
    {text: "food finder", done: false}
    ];

    myPlaces.removeComplete = function (){
      var items = myPlaces.AppfinderArray;
      myPlaces.AppfinderArray = []
      angular.forEach(items, function (AppfinderArrayItem) {
        if (!AppfinderArrayItem.done) {
          myPlaces.AppfinderArray.push(AppfinderArrayItem);
        } else {
          myPlaces.foundItemsArray.push(AppfinderArrayItem);
      }
    });
    console.log(myPlaces.foundItemsArray);
  }
    myPlaces.remaining = function() {
        var count = 0;
        angular.forEach(myPlaces.myAppFinderArray, function(AppfinderArrayItem) {
            count  += AppfinderArrayItem.done ? false : true;
        });
          return count;

     }
    }
 }
angular.module("MyApp").controller("AppfinderController", myPlacesList);
