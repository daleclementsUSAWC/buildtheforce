(function () {
    'use strict';
    angular.module('app').directive('ngCrisis', function () {
        return {
            restrict: 'E',
            link: function ($scope, element, attrs) {
                var one = [
                    {
                        name: 'Steady State',
                        offense: [20, 20, 20],
                        defense: [20, 20, 20],
                        additionalEnablers: [10, 10, 10],
                        techLevel: [1, 2, 3],
                        priorityForces: ['Air Defense', 'Infantry'],
                        img: 'temp',
                        order: 0,
                    },
                    {
                        name: 'Humanitarian Crisis',
                        offense: [20, 20, 20],
                        defense: [20, 20, 20],
                        additionalEnablers: [10, 10, 10],
                        techLevel: [1, 2, 3],
                        priorityForces: ['Air Defense', 'Infantry'],
                        img: 'temp',
                        order: 1,
                    },
                    {
                        name: 'Rogue State',
                        offense: [20, 20, 20],
                        defense: [20, 20, 20],
                        additionalEnablers: [10, 10, 10],
                        techLevel: [1, 2, 3],
                        priorityForces: ['Air Defense', 'Infantry'],
                        img: 'temp',
                        order: 2,
                    },
                    {
                        name: 'ISIS 2.0',
                        offense: [20, 20, 20],
                        defense: [20, 20, 20],
                        additionalEnablers: [10, 10, 10],
                        techLevel: [1, 2, 3],
                        priorityForces: ['Air Defense', 'Infantry'],
                        img: 'temp',
                        order: 3,
                    },
                    {
                        name: 'Defensive Campaign (vs Peer Competitor)',
                        offense: [20, 20, 20],
                        defense: [20, 20, 20],
                        additionalEnablers: [10, 10, 10],
                        techLevel: [1, 2, 3],
                        priorityForces: ['Air Defense', 'Infantry'],
                        img: 'temp',
                        order: 4,
                    },
                    {
                        name: 'Offensive Campaign (vs Peer Competitor)',
                        offense: [20, 20, 20],
                        defense: [20, 20, 20],
                        additionalEnablers: [10, 10, 10],
                        techLevel: [1, 2, 3],
                        priorityForces: ['Air Defense', 'Infantry'],
                        img: 'temp',
                        order: 5,
                    },
                ];

                var two = [
                    {
                        name: 'Test 2',
                        offense: [20, 20, 20],
                        defense: [20, 20, 20],
                        additionalEnablers: [10, 10, 10],
                        techLevel: [1, 2, 3],
                        priorityForces: ['Air Defense', 'Infantry'],
                        img: 'temp',
                        order: 0,
                    },
                ];

                var three = [
                    {
                        name: 'Test 3',
                        offense: [20, 20, 20],
                        defense: [20, 20, 20],
                        additionalEnablers: [10, 10, 10],
                        techLevel: [1, 2, 3],
                        priorityForces: ['Air Defense', 'Infantry'],
                        img: 'temp',
                        order: 0,
                    },
                ];

                attrs.$observe('boardSelect', function (board) {
                    $scope.board = board;
                    if (board == 'Crisis') {
                        $scope.events = one;
                    } else if (board == 'Political') {
                        $scope.events = two;
                    } else {
                        $scope.events = three;
                    }
                });

                $scope.likeliness = function (e) {
                    var text = '';
                    switch (e.order) {
                        case 0:
                            text = 'Most Likely - 36% (Roll 2-5, 10)'
                            break;
                        case 1:
                            text = '19% (Roll 7, 12)'
                            break;
                        case 2:
                            text = '14% (Roll 6)'
                            break;
                        case 3:
                            text = '14% (Roll 8)'
                            break;
                        case 4:
                            text = '11% (Roll 9)'
                            break;
                        case 5:
                            text = 'Least Likely - 5% (Roll 11)'
                            break;
                        default:
                        // code block
                    }

                    return text;
                }
            },
            templateUrl: 'app/directives/crisisBoard/ngCrisis.html'
        };
    });
})();