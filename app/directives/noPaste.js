(function () {
    'use strict';
    angular.module('app').directive('noPaste', function(){
        return {
            scope: {},
            link:function(scope,element){
                element.on('paste', function (event) {
                  event.preventDefault();
                });
            }
        };
    });
})();