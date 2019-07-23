module.controller("calcCtrl", CalcCtrl)

function CalcCtrl($scope) {
    $scope.num1 = 0
    $scope.num2 = 0
    $scope.math = '  '
    $scope.res = 0
    $scope.Calcul = function () {
        switch ($scope.math) {
            case '+':
                $scope.res = $scope.num1 + $scope.num2
                break;
            case '-':
                $scope.res = $scope.num1 - $scope.num2
                break;
            case '*':
                $scope.res = $scope.num1 * $scope.num2
                break;
            case '/':
                $scope.res = $scope.num1 / $scope.num2
                break;
        }
    }


}

// class Calc
// {
//     constructor(name,age,password,gender,car)
//     {
//         this.name = name
//         this.age = age
//         this.password = password
//         this.gender = this.gender
//         this.car = this.car
//         this.bike = this.bike

//     }
// }