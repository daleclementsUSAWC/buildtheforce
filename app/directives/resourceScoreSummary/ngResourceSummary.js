(function () {
    'use strict';
    angular.module('app').directive('ngResourceSummary', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/resourceScoreSummary/ngResourceSummary.html'
        };
    });
})();