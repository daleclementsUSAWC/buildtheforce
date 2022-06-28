(function () {
    'use strict';
    angular.module('app').directive('ngScoreSummary', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/resourceScoreSummary/ngScoreSummary.html'
        };
    });
})();