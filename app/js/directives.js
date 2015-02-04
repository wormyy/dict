'use strict';

/* Directives */

var dictApp = angular.module('dictDirectives',[])

dictApp.directive("words", function() {
  return {
    restrict: "A",
    templateUrl: "partials/words.html"
  }
});

dictApp.directive("languages", function() {
  return {
    restrict: "A",
    templateUrl: "partials/languages.html"
  }
});