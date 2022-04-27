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
            //getSingle: function (route, id) {return $http.get('Covid19/api/' + route + '/' + id);},
            //getByQuery: function (route, query) { return $http.get('Covid19/api/' + route + query);},
            //insert: function (route, data) { return $http.post('Covid19/api/' + route, data, config); },
            //update: function (route, id, data) { return $http.post('Covid19/api/' + route + '/' + id, data, config); },
            AmazonSendMail: function (data) { return $http.post("api/AmazonSendMail", data, config); },
        }
    }
})();