
module.controller("bCtrl", BCtrl)

// DI dependency injection - IOC
function BCtrl($scope, $rootScope,dataService, serviceService) {
    $scope.value = dataService
    $scope.fullB = serviceService.getArray()
    $scope.fullAtrig = function(){
         console.log('bb')
        $scope.fullB = serviceService.getArray()
    }
}
