
module.controller("sumCtrl", SumCtrl)

// DI dependency injection - IOC
function SumCtrl($scope, $rootScope,dataService) {
    $scope.value = dataService
    $scope.isPose = function(){
    //    console.log(check)
       return dataService['a'] + dataService['b'] > 0
    }


    
}
