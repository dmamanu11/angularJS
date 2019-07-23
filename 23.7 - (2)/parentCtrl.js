
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {
   $scope.fieldToOrder = 'model'
   $scope.filterV = 
    $scope.phone = new Mobile({})
    $scope.id = '0'
    
    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ]
    $scope.remove = function(itemIndex){
        $scope.devices.splice(itemIndex, 1)
        $rootScope.$broadcast("change", $scope.devices.length )
    }
    $scope.addDevice = function(){
        
        $scope.devices.push($scope.phone)
        $scope.phone = new Mobile({})
        console.log($scope.phone)
        $rootScope.$broadcast("change", $scope.devices.length )
    }
    $scope.upDevice = function(){
      
        $scope.devices.splice($scope.id , 1 , $scope.phone )
        $scope.phone = new Mobile({})
        
    }
    $scope.sort = function(param){
      
        $scope.fieldToOrder = param
       
    }
}