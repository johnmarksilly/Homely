(function () {
    'use strict';

    angular
        .module('homely')
        .directive('hDevice', deviceDirective);

    function deviceDirective(){
        return {
            restrict: 'E',
            replace: true,
            bindToController: {
                device: '='
            },
            templateUrl: 'app/components/device/device.view.html',
            controller: 'DeviceController',
            controllerAs: 'deviceVm'
        };
    }
})();