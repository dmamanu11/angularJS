module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, valueService) {

    var numbers = [1,3,6,5,3,5,1,6]
    $scope.X = ["X","X","X","X","X","X","X","X"]

    $scope.card = async function(id) {
        if($scope.X[id] == "X") {
            $scope.X[id] = numbers[id]
            valueService['triesArr'].push({val : numbers[id], index : id})
        }
        if(valueService['triesArr'].length >= 2){
            valueService['numOfTries']++
            if(valueService['triesArr'][0].val==valueService['triesArr'][1].val){
                $scope.X[valueService['triesArr'][0].index] = valueService['triesArr'][0].val
                $scope.X[valueService['triesArr'][1].index] = valueService['triesArr'][1].val
                valueService['right']++
            }
            else {
                await sleep(2);
                $scope.X[valueService['triesArr'][0].index] = 'X'
                $scope.X[valueService['triesArr'][1].index] = 'X'
            }
            valueService['triesArr'] = []
        }
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  