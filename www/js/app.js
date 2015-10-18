// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.controller('CatController', ['$scope', function($scope) {
  // default image url, note that gifs mode is enabled by default
  $scope.imageUrl = 'http://thecatapi.com/api/images/get?format=src&type=gif';
  // 'gifs mode', enabled by default
  $scope.toggleModel = {
    gifs: true
  };
  // loads next image
  // 't' parameter is different each time the function is triggered. This is done
  // to force the browser to reload the image and not to use cache
  $scope.reload = function() {
    $scope.imageUrl = "http://thecatapi.com/api/images/get?format=src&type="
      + ($scope.toggleModel.gifs ? "gif" : "jpg,png") + "&t=" + new Date().getTime();
  };
}]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
