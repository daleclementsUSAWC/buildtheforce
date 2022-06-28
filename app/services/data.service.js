(function () {
    'use strict';

    var serviceId = 'DataService';
    angular.module('app').factory(serviceId, ['common', '$http', DataService]);

    function DataService(common, $http) {
        var config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        var delete_cookie = function (name) {
            common.$cookies.remove(name);
        };

        return {
            clearCookies: function (cookies) {
                var arrayLength = cookies.length;
                for (var i = 0; i < arrayLength; i++) {
                    delete_cookie(cookies[i]);
                }
                return "cookies cleared";
            },

            getRules: function () { return $http.get('https://api.sheety.co/5f72d14f597c265145ff6205bfa7baae/buildTheForce/rules', config) },
        }
    }
})();