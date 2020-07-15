import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoUtils, Filter, FilterUtil } from '../model';
import { TodoService } from './todo.service';
var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService, route) {
        this.todoService = todoService;
        this.route = route;
        this.newTodo = '';
        this.filter = Filter.ALL;
    }
    // ~ lifecycle
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.filter = FilterUtil.fromString(params['filter']);
        });
    };
    TodoComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.todos = this.todoService.findAll();
        this.filteredTodos = this.todos.filter(function (t) { return FilterUtil.accepts(t, _this.filter); });
        this.remaining = this.completed = 0;
        this.todos.forEach(function (t) { return t.completed ? _this.completed++ : _this.remaining++; });
        this.allCompleted = this.todos.length === this.completed;
    };
    TodoComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    // ~ crud
    TodoComponent.prototype.create = function (todo) {
        if (todo.trim().length === 0) {
            return;
        }
        this.todoService.create(todo);
        this.newTodo = '';
    };
    TodoComponent.prototype.edit = function (todo) {
        this.currentTodo = todo;
        this.snapshot = TodoUtils.copy(todo);
    };
    TodoComponent.prototype.cancelEdit = function () {
        TodoUtils.copyProperties(this.snapshot, this.currentTodo);
        this.currentTodo = null;
        this.snapshot = null;
    };
    TodoComponent.prototype.update = function (todo) {
        this.currentTodo = null;
        this.snapshot = null;
        this.todoService.update(todo);
    };
    TodoComponent.prototype.delete = function (todo) {
        this.todoService.delete(todo);
    };
    TodoComponent.prototype.toggle = function (todo) {
        this.todoService.toggle(todo);
    };
    TodoComponent.prototype.toggleAll = function (completed) {
        this.todoService.toggleAll(completed);
    };
    TodoComponent.prototype.clearCompleted = function () {
        this.todoService.clearCompleted();
    };
    TodoComponent = __decorate([
        Component({
            selector: 'app-todo',
            template: "<section class=\"todoapp\">\n\t<header class=\"header\">\n\t\t<h1>todos</h1>\n\t\t<input class=\"new-todo\" placeholder=\"What needs to be done?\"\n\t\t\t\t #todo [(ngModel)]=\"newTodo\" (keyup.enter)=\"create(todo.value)\" autofocus>\n\t</header>\n\t<section *ngIf=\"todos.length > 0\" class=\"main\">\n\t\t<input class=\"toggle-all\" id=\"toggle-all\" type=\"checkbox\"\n\t\t\t\t #inputToggleAll [checked]=\"allCompleted\" (click)=\"toggleAll(inputToggleAll.checked)\">\n\t\t<label for=\"toggle-all\">Mark all as complete</label>\n\t\t<ul class=\"todo-list\">\n\t\t\t<li *ngFor=\"let todo of filteredTodos\"\n\t\t\t\t [ngClass]=\"{'completed' : todo.completed, 'editing': todo == currentTodo}\">\n\t\t\t\t<div class=\"view\">\n\t\t\t\t\t<input class=\"toggle\" type=\"checkbox\" (change)=\"toggle(todo)\" [checked]=\"todo.completed\">\n\t\t\t\t\t<label *ngIf=\"currentTodo?.id != todo.id\" (dblclick)=\"edit(todo)\">{{todo.title}}</label>\n\t\t\t\t\t<button (click)=\"delete(todo)\" class=\"destroy\"></button>\n\t\t\t\t</div>\n\t\t\t\t<input *ngIf=\"currentTodo == todo\" [(ngModel)]=\"currentTodo.title\"\n\t\t\t\t\t\t (keyup.enter)=\"update(currentTodo)\"\n\t\t\t\t\t\t (keyup.esc)=\"cancelEdit()\"\n\t\t\t\t\t\t class=\"edit\" autofocus>\n\t\t\t</li>\n\t\t</ul>\n\t</section>\n\t<footer *ngIf=\"todos.length > 0\" class=\"footer\">\n\t\t<span class=\"todo-count\"><strong>{{remaining}}</strong> item{{remaining !== 1 ? 's' : ''}} left</span>\n\n\t\t<ul class=\"filters\">\n\t\t\t<li><a [routerLink]=\"['']\" [ngClass]=\"{'selected': filter == 'SHOW_ALL'}\">All</a></li>\n\t\t\t<li><a [routerLink]=\"['', 'active']\" [ngClass]=\"{'selected': filter == 'SHOW_ACTIVE'}\">Active</a></li>\n\t\t\t<li><a [routerLink]=\"['', 'completed']\" [ngClass]=\"{'selected': filter == 'SHOW_COMPLETED'}\">Completed</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<button *ngIf=\"completed > 0\" class=\"clear-completed\" (click)=\"clearCompleted()\">Clear completed</button>\n\t</footer>\n</section>\n<footer class=\"info\">\n\t<p>Double-click to edit a todo</p>\n\t<p>Based on <a href=\"http://todomvc.com\">TodoMVC</a></p>\n</footer>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [TodoService, ActivatedRoute])
    ], TodoComponent);
    return TodoComponent;
}());
export { TodoComponent };
//# sourceMappingURL=todo.component.js.map