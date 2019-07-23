module.controller("nameCtrl", NameCtrl)


function NameCtrl($scope, $rootScope){
    
     $rootScope.myName = ''

$scope.$watch('myName' , function(newName , old){
    $rootScope.myName = newName
    if (newName == 'Daniel')
        alert("this is my name")
})
      
//     }

// )
}