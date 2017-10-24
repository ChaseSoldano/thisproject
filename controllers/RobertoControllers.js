var myApp = angular.module("myApp", []);

var button = document.createElement("button");
button.innerHTML = "Do Something";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

//button.addEventListener("click", function() {
//  alert("Loading");
//});



/// <reference path="angular.min.js" />
//var myModule = angular.module("myModule", []);

//myModule.controller("myController", function ($scope) {
//    var account = {
        //firstName: "Roberto",
        //lastName: "Herrera",
        //emailAddress: "rherrera1215@gmail.com"
    //};
    //$scope.account = account;
//});
