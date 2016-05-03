(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('empController', ['$scope', 'empService', empController]);

    function empController($scope, empService) {
        $scope.divHide = true;
        //$scope.PAHide = true;
        $scope.txtAge = "";
        $scope.txtName = "";
        $scope.txtBS = "";
        $scope.chkVehicle = "";
        $scope.txtOA = "";
        $scope.txtHRA = "";
        $scope.txtPA = "";
        $scope.txtIns = "";
        $scope.rb1 = "Male";
        $scope.submitForm = function () {
            $scope.divHide = false;
            $scope.lblName = $scope.txtName;
            $scope.lblAge = $scope.txtAge;
            $scope.LblBS = $scope.txtBS;
            if ($scope.chkVehicle == true) {
                $scope.lblHasVehicle = "Yes";
                $scope.lblPA = $scope.txtPA;
            }
            else {
                $scope.lblHasVehicle = "No";
            }
            $scope.lblGender = $scope.rb1;
            $scope.lblOA = empService.CalculateDA($scope.txtOA, $scope.txtBS);
            $scope.lblHRA = empService.CalculateHRA($scope.txtHRA, $scope.txtBS);
            $scope.lblIns = empService.CalculatePF($scope.txtIns, $scope.txtBS);
        };

    }
})();
