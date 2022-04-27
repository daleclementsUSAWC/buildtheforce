(function () {
    'use strict';

    // Define the common module 
    // Contains services:
    //  - common
    var commonModule = angular.module('common', ['common']);

    // Must configure the common service and set its 
    // events via the commonConfigProvider
    commonModule.provider('commonConfig', function () {
        this.config = {
            // These are the properties we need to set
            //controllerActivateSuccessEvent: '',
            //spinnerToggleEvent: ''

        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    });

    commonModule.factory('common', ['$q', '$rootScope', '$route', '$timeout', '$sessionStorage', '$cookies', '$location', '$window', 'toastr', 'commonConfig', common]);

    function common($q, $rootScope, $route, $timeout, $sessionStorage, $cookies, $location, $window, toastr, commonConfig) {
        var service = {
            // common angular dependencies
            $broadcast: $broadcast,
            $q: $q,
            $rootScope: $rootScope,
            $route: $route,
            $timeout: $timeout,
            $sessionStorage: $sessionStorage,
            $cookies: $cookies,
            $location: $location,
            $window: $window,
            // generic
            toastr: toastr,
            getCookie: getCookie,
            spinnerToggle: spinnerToggle,
            activateController: activateController,
            errorToggle: errorToggle,
        };

        return service;

        function activateController(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                $broadcast(commonConfig.config.controllerActivateSuccessEvent, data);
            });
        }

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function spinnerToggle() {
            return $broadcast(commonConfig.config.spinnerToggleEvent);
        }

        function errorToggle() {
            return $broadcast(commonConfig.config.errorToggleEvent);
        }
    }
})();