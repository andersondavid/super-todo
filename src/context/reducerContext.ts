
const updateTodo = (state: ToDoContent[], payload: UpdateTodoDataType) => {
	const { todoId, taskId, value } = payload

	return state.map((todo) => {
		if (todo._id === todoId) {
			let newTodo = todo.tasks.map((task) => {
				if (task._id == taskId) {
					return { ...task, isComplete: value };
				}
				return task;
			});

			return { ...todo, tasks: newTodo };
		}
		return todo;
	});
}

const addTodo = (state: ToDoContent[], payload: string) => {
	const taskArray: TaskContent[] = payload
		.split("\n")
		.filter((task) => task != "")
		.map((task, index) => {
			return {
				_id: index + 1,
				isComplete: false,
				content: task,
			};
		});

	const newTodo: ToDoContent = {
		_id: state.length + 1,
		tasks: taskArray,
	};

	return newTodo;
}

export const reducerContext: (state: ToDoContent[], action: ActionType) => ToDoContent[] = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, addTodo(state, action.payload as string)]
		case 'UPDATE_TODO':
			return updateTodo(state, action.payload as UpdateTodoDataType)
		default:
			return state
	}
}