(function () {
    'use strict';

    angular
        .module('homely')
        .config(homelyConfig);

    homelyConfig.$inject = ['$urlRouterProvider', '$stateProvider']

    function homelyConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('devices');

        $stateProvider.state('devices', {
            url: '/devices',
            templateUrl: 'app/devices/devices.tmpl.html',
            controller: 'DevicesController',
            controllerAs: 'devicesVm'
        })
    }
})();