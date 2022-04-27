(function () {
    'use strict';
    var controllerId = 'home';
    angular.module('app').controller(controllerId, ['common', 'DataService', home]);

    function home(common, DataService) {
        var vm = this;
        vm.title = controllerId;

        activate();

        function activate() {
            common.activateController([], controllerId);
        }
    }
})();