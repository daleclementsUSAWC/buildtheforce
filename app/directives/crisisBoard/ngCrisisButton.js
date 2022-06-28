(function () {
    'use strict';
    angular.module('app').directive('ngCrisisButton', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/crisisBoard/ngCrisisButton.html'
        };
    });
})();