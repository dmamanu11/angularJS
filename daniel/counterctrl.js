module.controller("counterCtrl", TimeCtrl)


function TimeCtrl($scope) {
    $scope.time = new Date();
    $scope.refreshTime = function() {
        $scope.time = new Date() ;
    }

}