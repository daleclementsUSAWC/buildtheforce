(function () {
    'use strict';
    angular.module('app').directive('ngRulesTerms', ['DataService', ngRulesTerms]);
    function ngRulesTerms(DataService) {
        return {
            restrict: 'E',
            link: function ($scope) {
                DataService.getRules().then(function (response) {
                    $scope.rules = response.data.rules;
                })
            },
            templateUrl: 'app/directives/rulesTerms/ngRulesTerms.html'
        };
    }
})();