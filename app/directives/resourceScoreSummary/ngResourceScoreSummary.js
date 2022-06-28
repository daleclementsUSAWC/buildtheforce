(function () {
    'use strict';
    angular.module('app').directive('ngResourceScoreSummary', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/resourceScoreSummary/ngResourceScoreSummary.html'
        };
    });
})();