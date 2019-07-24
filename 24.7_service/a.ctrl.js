
module.controller("aCtrl", ACtrl)

// DI dependency injection - IOC
function ACtrl($scope, $rootScope,dataService, serviceService) {
    $scope.value = dataService
    $scope.fullA = serviceService.getArray()
    $scope.fullAtrig = function(){
         console.log('aa')
        $scope.fullA = serviceService.getArray()
    }
}
