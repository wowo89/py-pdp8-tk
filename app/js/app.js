var remote = require('remote');

var app = angular.module('jsPdp8', ['ngMaterial', 'ngMdIcons']);

app.controller('MainCtrl', ['$scope', function($scope){
  var devTools = false;
  
  $scope.toggleDevTools = function() { 
    remote.getCurrentWindow().test();
    if(!devTools) {
       remote.getCurrentWindow().openDevTools({ detach: true });
       devTools = true;
    } 
    else {
      remote.getCurrentWindow().closeDevTools();
      devTools = false;
    }   
  };
 
}]);
