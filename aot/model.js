var Todo = /** @class */ (function () {
	function Todo(id, title, completed) {
		this.id = id
		this.title = title
		this.completed = completed ? completed : false
	}
	return Todo
})()
export { Todo }
var TodoUtils = /** @class */ (function () {
	function TodoUtils() {}
	TodoUtils.copy = function (todo) {
		var copy = new Todo(null, null)
		this.copyProperties(todo, copy)
		return copy
	}
	TodoUtils.copyProperties = function (src, dest) {
		dest.id = src.id
		dest.title = src.title
		dest.completed = src.completed
	}
	return TodoUtils
})()
export { TodoUtils }
// Filter
export var Filter
;(function (Filter) {
	Filter['ALL'] = 'SHOW_ALL'
	Filter['ACTIVE'] = 'SHOW_ACTIVE'
	Filter['COMPLETED'] = 'SHOW_COMPLETED'
})(Filter || (Filter = {}))
var FilterUtil = /** @class */ (function () {
	function FilterUtil() {}
	FilterUtil.fromString = function (filter) {
		switch (filter) {
			case 'completed':
				return Filter.COMPLETED
			case 'active':
				return Filter.ACTIVE
			case 'all':
			default:
				return Filter.ALL
		}
	}
	FilterUtil.accepts = function (todo, filter) {
		switch (filter) {
			case Filter.ACTIVE:
				return !todo.completed
			case Filter.COMPLETED:
				return todo.completed
			case Filter.ALL:
			default:
				return true
		}
	}
	return FilterUtil
})()
export { FilterUtil }
//# sourceMappingURL=model.js.map
