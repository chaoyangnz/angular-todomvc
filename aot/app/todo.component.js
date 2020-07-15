import * as tslib_1 from 'tslib'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TodoUtils, Filter, FilterUtil } from '../model'
import { TodoService } from './todo.service'
var TodoComponent = /** @class */ (function () {
	function TodoComponent(todoService, route) {
		this.todoService = todoService
		this.route = route
		this.newTodo = ''
		this.filter = Filter.ALL
	}
	// ~ lifecycle
	TodoComponent.prototype.ngOnInit = function () {
		var _this = this
		this.routeSubscription = this.route.params.subscribe(function (params) {
			_this.filter = FilterUtil.fromString(params['filter'])
		})
	}
	TodoComponent.prototype.ngDoCheck = function () {
		var _this = this
		this.todos = this.todoService.findAll()
		this.filteredTodos = this.todos.filter(function (t) {
			return FilterUtil.accepts(t, _this.filter)
		})
		this.remaining = this.completed = 0
		this.todos.forEach(function (t) {
			return t.completed ? _this.completed++ : _this.remaining++
		})
		this.allCompleted = this.todos.length === this.completed
	}
	TodoComponent.prototype.ngOnDestroy = function () {
		this.routeSubscription.unsubscribe()
	}
	// ~ crud
	TodoComponent.prototype.create = function (todo) {
		if (todo.trim().length === 0) {
			return
		}
		this.todoService.create(todo)
		this.newTodo = ''
	}
	TodoComponent.prototype.edit = function (todo) {
		this.currentTodo = todo
		this.snapshot = TodoUtils.copy(todo)
	}
	TodoComponent.prototype.cancelEdit = function () {
		TodoUtils.copyProperties(this.snapshot, this.currentTodo)
		this.currentTodo = null
		this.snapshot = null
	}
	TodoComponent.prototype.update = function (todo) {
		this.currentTodo = null
		this.snapshot = null
		this.todoService.update(todo)
	}
	TodoComponent.prototype.delete = function (todo) {
		this.todoService.delete(todo)
	}
	TodoComponent.prototype.toggle = function (todo) {
		this.todoService.toggle(todo)
	}
	TodoComponent.prototype.toggleAll = function (completed) {
		this.todoService.toggleAll(completed)
	}
	TodoComponent.prototype.clearCompleted = function () {
		this.todoService.clearCompleted()
	}
	TodoComponent = tslib_1.__decorate(
		[
			Component({
				selector: 'app-todo',
				template:
					'<section class="todoapp">\n\t<header class="header">\n\t\t<h1>todos</h1>\n\t\t<input\n\t\t\tclass="new-todo"\n\t\t\tplaceholder="What needs to be done?"\n\t\t\t#todo\n\t\t\t[(ngModel)]="newTodo"\n\t\t\t(keyup.enter)="create(todo.value)"\n\t\t\tautofocus\n\t\t/>\n\t</header>\n\t<section *ngIf="todos.length > 0" class="main">\n\t\t<input\n\t\t\tclass="toggle-all"\n\t\t\tid="toggle-all"\n\t\t\ttype="checkbox"\n\t\t\t#inputToggleAll\n\t\t\t[checked]="allCompleted"\n\t\t\t(click)="toggleAll(inputToggleAll.checked)"\n\t\t/>\n\t\t<label for="toggle-all">Mark all as complete</label>\n\t\t<ul class="todo-list">\n\t\t\t<li\n\t\t\t\t*ngFor="let todo of filteredTodos"\n\t\t\t\t[ngClass]="{\n\t\t\t\t\tcompleted: todo.completed,\n\t\t\t\t\tediting: todo == currentTodo\n\t\t\t\t}"\n\t\t\t>\n\t\t\t\t<div class="view">\n\t\t\t\t\t<input\n\t\t\t\t\t\tclass="toggle"\n\t\t\t\t\t\ttype="checkbox"\n\t\t\t\t\t\t(change)="toggle(todo)"\n\t\t\t\t\t\t[checked]="todo.completed"\n\t\t\t\t\t/>\n\t\t\t\t\t<label\n\t\t\t\t\t\t*ngIf="currentTodo?.id != todo.id"\n\t\t\t\t\t\t(dblclick)="edit(todo)"\n\t\t\t\t\t\t>{{ todo.title }}</label\n\t\t\t\t\t>\n\t\t\t\t\t<button (click)="delete(todo)" class="destroy"></button>\n\t\t\t\t</div>\n\t\t\t\t<input\n\t\t\t\t\t*ngIf="currentTodo == todo"\n\t\t\t\t\t[(ngModel)]="currentTodo.title"\n\t\t\t\t\t(keyup.enter)="update(currentTodo)"\n\t\t\t\t\t(keyup.esc)="cancelEdit()"\n\t\t\t\t\tclass="edit"\n\t\t\t\t\tautofocus\n\t\t\t\t/>\n\t\t\t</li>\n\t\t</ul>\n\t</section>\n\t<footer *ngIf="todos.length > 0" class="footer">\n\t\t<span class="todo-count"\n\t\t\t><strong>{{ remaining }}</strong> item{{\n\t\t\t\tremaining !== 1 ? \'s\' : \'\'\n\t\t\t}}\n\t\t\tleft</span\n\t\t>\n\n\t\t<ul class="filters">\n\t\t\t<li>\n\t\t\t\t<a\n\t\t\t\t\t[routerLink]="[\'\']"\n\t\t\t\t\t[ngClass]="{ selected: filter == \'SHOW_ALL\' }"\n\t\t\t\t\t>All</a\n\t\t\t\t>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a\n\t\t\t\t\t[routerLink]="[\'\', \'active\']"\n\t\t\t\t\t[ngClass]="{ selected: filter == \'SHOW_ACTIVE\' }"\n\t\t\t\t\t>Active</a\n\t\t\t\t>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a\n\t\t\t\t\t[routerLink]="[\'\', \'completed\']"\n\t\t\t\t\t[ngClass]="{ selected: filter == \'SHOW_COMPLETED\' }"\n\t\t\t\t\t>Completed</a\n\t\t\t\t>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<button\n\t\t\t*ngIf="completed > 0"\n\t\t\tclass="clear-completed"\n\t\t\t(click)="clearCompleted()"\n\t\t>\n\t\t\tClear completed\n\t\t</button>\n\t</footer>\n</section>\n<footer class="info">\n\t<p>Double-click to edit a todo</p>\n\t<p>Based on <a href="http://todomvc.com">TodoMVC</a></p>\n</footer>\n',
				changeDetection: ChangeDetectionStrategy.OnPush,
				styles: [''],
			}),
			tslib_1.__metadata('design:paramtypes', [
				TodoService,
				ActivatedRoute,
			]),
		],
		TodoComponent
	)
	return TodoComponent
})()
export { TodoComponent }
//# sourceMappingURL=todo.component.js.map
