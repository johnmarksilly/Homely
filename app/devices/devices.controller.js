(function () {
    'use strict';

    angular
        .module('homely')
        .controller('DevicesController', DevicesController);

    DevicesController.$inject = [];

    function DevicesController() {
        var vm = this;

        // Variables
        vm.devices = [
            {
                id: '2',
                name: "JohnMark's Room Temperature",
                location: 'ROOM',
                mac: '81:15:1A:4B:90',
                type: "TEMP",
                currentValue: {
                    "temp": {
                        value: 74.4,
                        units: '°F'
                    },
                    "humidity": {
                        value: 34,
                        units: '%'
                    }
                }
            },
            {
                id: '3',
                name: "JohnMark's Room Light",
                location: 'ROOM',
                mac: '81:15:1A:4B:90',
                type: "SWCH",
                currentValue: {
                    "state": {
                        value: "ON",
                        units: ''
                    }
                }
            }
        ];

        // Method Declarations

        // Initialization

        // Method Definitions
    }
})();