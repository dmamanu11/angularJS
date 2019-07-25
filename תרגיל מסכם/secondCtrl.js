
module.controller("secondCtrl", SecondCtrl)

// DI dependency injection - IOC
function SecondCtrl($scope, valueService) {
    $scope.Sec = valueService

}