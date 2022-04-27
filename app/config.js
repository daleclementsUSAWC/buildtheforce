(function () {
    'use strict';

    var app = angular.module('app');

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        spinnerToggle: 'spinner.toggle'
    };

    var config = {
        events: events,
        version: '0.1.0'
    };

    app.value('config', config);
    
    //#region Configure the common services via commonConfig
    app.config(['commonConfigProvider', '$provide', function (cfg, $provide) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        cfg.config.spinnerToggleEvent = config.events.spinnerToggle;

        var rootUrl = $("#linkRoot").attr("href");
        $provide.constant('rootUrl', rootUrl);
    }]);

    //#endregion
})();