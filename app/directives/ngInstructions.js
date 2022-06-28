(function () {
    'use strict';
    angular.module('app').directive('ngInstructions', function () {
        return {
            restrict: 'E',
            template: '<div class="text-center small">' +
                '<p class="text-uppercase font-weight-bold">Instructions</p>' +
                '<span class="text-warning">Enter decisions into yellow-shaded cells (leave blank if zero or none). </span>' +
                '<span class="text-primary">Enter results of die rolls (or estimates) into blue cells. </span>' +
                '<span class="text-secondary">Values in gray cells are calculated automatically. </span>' +
                '<span class="text-danger">Cost and failure point totals shown in red cells.</span>' +
                '</div>'
        };
    });
})();