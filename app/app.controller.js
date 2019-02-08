"use strict";
function TodoController() {
    const vm = this;
    vm.tasks = [
        { task: "Walk the dog", completed: true},
        { task: "Grocery shop", completed: false},
        { task: "Fill the gas tank", completed: true},
        { task: "Kill flanders", completed: false}
    ];
}

angular
    .module("todoApp")
    .controller("TodoController", TodoController);