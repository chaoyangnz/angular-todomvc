export class Todo {
	id: number
	title: string
	completed: boolean

	constructor(id: number, title: string, completed?: boolean) {
		this.id = id
		this.title = title
		this.completed = completed ? completed : false
	}
}

export class TodoUtils {
	static copy(todo: Todo) {
		const copy = new Todo(null, null)
		this.copyProperties(todo, copy)
		return copy
	}

	static copyProperties(src: Todo, dest: Todo) {
		dest.id = src.id
		dest.title = src.title
		dest.completed = src.completed
	}
}

// Filter

export enum Filter {
	ALL = 'SHOW_ALL',
	ACTIVE = 'SHOW_ACTIVE',
	COMPLETED = 'SHOW_COMPLETED',
}

export class FilterUtil {
	static fromString(filter: string): Filter {
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

	static accepts(todo: Todo, filter?: Filter): boolean {
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
}
