type ToDoContent = {
	_id: number;
	tasks: TaskContent[];
};

type TaskContent = {
	_id: number;
	content: string;
	isComplete: boolean;
};