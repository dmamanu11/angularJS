
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope, globalConst, dataService, apiService) {
    $scope.productName = globalConst.name
    $scope.productVersion = globalConst.ver
    
    $scope.items = [1,2,3,4,5]

    //$scope.data = dataService
    dataService.items = $scope.items

    $scope.calcPower = function() {
        alert( `3 ^ 2 = ${apiService.getPower2(3)}`)
    }
    $scope.api = apiService
}