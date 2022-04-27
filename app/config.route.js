(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    //Assign the title to the browser title
    app.run(['$rootScope', 'common', function ($rootScope, common) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            try{
                $rootScope.title = current.$$route.title;
            } catch (e) {
                $rootScope.title = '';
            }
        });
    }]);

    // Define the routes 
    function getRoutes() {
        return [
            //Constant Routes - TOP - ALL
            
            

            //NON Repeater ROUTES
            {
                url: '/',
                cssClass: 'Hidden',
                config: {
                    title: 'Home',
                    templateUrl: 'app/home/home.html',
                    controller: 'home',
                    controllerAs: 'vm',
                    settings: {
                        nav: 1,
                        content: 'Home',
                        auth: true,
                    }
                }
            },
        ];
    }
})();