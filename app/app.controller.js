"use strict";
function TodoController() {
    const vm = this;
    vm.tasks = [];
    vm.addTask = function(newTask) {
        vm.newTask.completed = false;
        console.log('hello')
        vm.tasks.push(angular.copy(newTask))
        vm.newTask = {}
    }
    vm.removeTask = function(index) {
        vm.tasks.splice(index, 1)
    }
    vm.completeTask = function(index) {
        console.log(`hello`)
        vm.tasks[index].completed = true;
        console.log(vm.tasks[index])
    }
}

angular
    .module("todoApp")
    .controller("TodoController", TodoController);

