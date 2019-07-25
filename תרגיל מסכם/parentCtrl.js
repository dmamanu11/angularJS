

app.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, serviceService,valueService, $http, $q) {
    var number = [1,8,1,3,5,8,5,3]
   
    $scope.X = ['X','X','X','X','X','X','X','X']
    
    
    $scope.num = function (id){
        if($scope.X[id] == 'X'){
           $scope.X[id] = number[id]
           console.log(valueService['num_of_tries'])
        }
        if(valueService['tries'].length <= 2 && $scope.X[id] == 'X'){         
            valueService['tries'].push('')
            valueService['num_of_tries']++
            console.log(valueService['tries'])
        }
        else valueService['tries'] = []
    }

    
    // $scope.checkError = function (){
    //     return valueService['error'] 
    // }

}