const secondModule = angular.module("mysecondmodule", [])

secondModule.controller("HelloController", HelloCtrl);

function HelloCtrl() {
    this.message = "Hello I am hello controller in second module"
}