
module.controller("inputCtrl", InputCtrl)

// DI dependency injection - IOC
function InputCtrl($scope, $rootScope,dataService) {
    $scope.value = dataService

    $scope.color = function(colorStyle) {
        console.log(colorStyle)
        if(colorStyle == 'GY')
         dataService.choosenColor = 'GY'
        if(colorStyle == 'BB')
         dataService.choosenColor = 'BB'
    }
}
