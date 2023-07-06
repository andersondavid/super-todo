import { create } from "@/services/api";

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

	const content = taskArray.map((task) =>{
		return {
			isComplete: task.isComplete,
			textTodo: task.content
		}
	})

	create({
		content
	})

	return newTodo;
}

const removeTodo = (state: ToDoContent[], payload: UpdateTodoDataType) => {
	const restState = state.filter((todo) => todo._id != payload.todoId)
	return restState
}

export const reducerContext: (state: ToDoContent[], action: ActionType) => ToDoContent[] = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, addTodo(state, action.payload as string)]
		case 'UPDATE_TODO':
			return updateTodo(state, action.payload as UpdateTodoDataType)
		case "REMOVE_TODO":
			return removeTodo(state, action.payload as UpdateTodoDataType)
		default:
			return state
	}
}