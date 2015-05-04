var remote = require('remote');

var app = angular.module('jsPdp8', ['ngMaterial', 'ngMdIcons']);

app.factory("$codeMirror", [function() {
  var codeMirrorApi = {};
  
  codeMirrorApi.codeMirror = CodeMirror(document.body, {
    value: "ORG 100\nLDA X\nBSA CHK\nINC\nHLT\nX, AND Y\nY, HEX 200\nCHK, HEX 0\nCIR\nSNA\nBUN CHK I\nADD X\nBUN CHK I\nEND",
    mode:  "pdp8",
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


