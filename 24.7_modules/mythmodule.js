const thModule = angular.module("mythmodule", [])

thModule.controller("HelloController3", HelloCtrl);

function HelloCtrl() {
    this.message = "Hello I am hello controller in three module"
}