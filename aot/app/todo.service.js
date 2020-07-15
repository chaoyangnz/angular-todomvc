import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Todo } from '../model';
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.lastInsertId = 0;
        this.todos = [];
        this.fetch();
        if (this.todos.length > 0) {
            this.lastInsertId = this.todos[this.todos.length - 1].id;
        }
    }
    TodoService_1 = TodoService;
    TodoService.prototype.create = function (todo) {
        todo = todo.trim();
        if (todo.length === 0) {
            return;
        }
        var newTodo = new Todo(++this.lastInsertId, todo);
        this.todos.push(newTodo);
        this.save();
        return newTodo;
    };
    TodoService.prototype.findAll = function () {
        return this.todos;
    };
    TodoService.prototype.update = function (todo) {
        todo.title = todo.title.trim();
        if (todo.title.length === 0) {
            this.delete(todo);
        }
        this.save();
    };
    TodoService.prototype.delete = function (todo) {
        this.todos = this.todos.filter(function (t) { return t !== todo; });
        this.save();
    };
    TodoService.prototype.toggle = function (todo) {
        todo.completed = !todo.completed;
        this.save();
    };
    TodoService.prototype.toggleAll = function (completed) {
        this.todos.forEach(function (t) { return t.completed = completed; });
        this.save();
    };
    TodoService.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (t) { return !t.completed; });
        this.save();
    };
    TodoService.prototype.remaining = function () {
        return this.todos
            .filter(function (t) { return !t.completed; })
            .length;
    };
    TodoService.prototype.completed = function () {
        return this.todos
            .filter(function (t) { return t.completed; })
            .length;
    };
    TodoService.prototype.fetch = function () {
        var persistedValue = localStorage.getItem(TodoService_1.STORAGE_KEY);
        try {
            this.todos = JSON.parse(persistedValue || '[]');
        }
        catch (ignore) {
            this.todos = [];
        }
    };
    TodoService.prototype.save = function () {
        localStorage.setItem(TodoService_1.STORAGE_KEY, JSON.stringify(this.todos));
    };
    var TodoService_1;
    TodoService.STORAGE_KEY = 'todos-angular-5';
    TodoService = TodoService_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], TodoService);
    return TodoService;
}());
export { TodoService };
//# sourceMappingURL=todo.service.js.map