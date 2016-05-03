(function () {
    'use strict';
    var app = angular.module('app');
    app.factory('empService', empService);

    function empService() {
        return {
            CalculateDA: function (OA, BS) {
                return ( parseInt(OA) / 100) * parseInt(BS)
            },
            CalculateHRA: function (HRA, BS) {
                return ( parseInt(HRA) / 100) * parseInt(BS)
            },
            CalculatePF: function (ins, BS) {
                return ( parseInt(ins) / 100) * parseInt(BS)
            }
        }
    }
})();