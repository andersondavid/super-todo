type ToDoContent = {
	_id: number;
	tasks: TaskContent[];
};

type TaskContent = {
	_id: number;
	content: string;
	isComplete: boolean;
};



type UpdateTodoDataType = {
	todoId: number;
	taskId: number;
	value: boolean
}


type ActionType = {
	type: 'ADD_TODO' | 'REMOVE_TODO' | 'UPDATE_TODO';
	payload: string | UpdateTodoDataType
}