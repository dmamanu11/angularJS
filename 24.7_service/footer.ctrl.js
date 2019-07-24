
module.controller("footerCtrl", FooterCtrl)

// DI dependency injection - IOC
function FooterCtrl($scope, $rootScope, globalConst, dataService, serviceService) {
    $scope.productName = globalConst.name
    $scope.productVersion = globalConst.ver
    
    $scope.items = dataService.items
    $scope.sayInUpper = function() {
        alert(serviceService.getUpper("hello"))
    }
}