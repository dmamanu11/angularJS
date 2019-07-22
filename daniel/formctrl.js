module.controller("formCtrl", FormCtrl)


// DI dependency injection - IOC
function FormCtrl($scope) {

    
    $scope.person = new Person('')
    $scope.name = '';
    $scope.resetName = function() {
        $scope.name=''
    }

}

class Person
{
    constructor(name,age,password,gender)
    {
        this.name = name
        this.age = age
        this.password = password
        this.gender = this.gender

    }
}