(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: navbar.js)
        'ngMessages',
        'ngCookies',
        'angular.filter',
        'ui.bootstrap',

        // Custom modules 
        'common', // common functions

        //local and session storage
        'ngStorage',

        //Toastr alert functions
        'toastr',

        //AngularJs moment picker
        'moment-picker',
    ]);


    app.value('$', $);

    // Handle routing errors and success events
    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();