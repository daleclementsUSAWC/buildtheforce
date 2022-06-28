(function () {
    'use strict';
    angular.module('app').directive('ngRound', function () {
        return {
            restrict: 'E',
            link: function ($scope, element, attrs) {
                //code here
                getData();

                function getData() {
                    $scope.round = 1;
                    $scope.targetTechLevel;

                }
            },
            templateUrl: 'app/directives/round/ngRound.html'
        };
    });
})();