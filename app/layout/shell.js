(function () {
    'use strict';

    var controllerId = 'shell';
    angular.module('app').controller(controllerId, ['$rootScope', 'common', 'config', shell]);

    function shell($rootScope, common, config) {
        var vm = this;
        var events = config.events;
        vm.spinner = false;

        function toggleSpinner() { vm.spinner = !vm.spinner; }

        $rootScope.$on(events.controllerActivateSuccess,
            function () {
                common.$timeout(function () {
                    vm.spinner = false; $("body").removeClass("loadingContent");
                }, 700);
            }
        );

        $rootScope.$on(events.spinnerToggle, function () {
            toggleSpinner();
        });

        $rootScope.$on('$routeChangeStart',
            function () { vm.spinner = true; $("body").addClass("loadingContent"); }
        );

        $rootScope.$on('spinnerOff',
            function () { vm.spinner = false; $("body").removeClass("loadingContent"); }
        );

        $rootScope.$on('spinnerOn',
            function () { vm.spinner = true; $("body").addClass("loadingContent"); }
        );
        
    };
})();