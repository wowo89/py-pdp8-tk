var remote = require('remote');

var app = angular.module('jsPdp8', ['ngMaterial', 'ngMdIcons']);

app.factory("$codeMirror", [function() {
  var codeMirrorApi = {};
  
  codeMirrorApi.codeMirror = CodeMirror(document.body, {
    value: "function myScript(){return 100;}\n",
    mode:  "javascript",
    theme: "monokai"
  });
  
  return codeMirrorApi;
}]);

app.controller('MainCtrl', ['$scope', '$codeMirror', function($scope, $codeMirror){
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


