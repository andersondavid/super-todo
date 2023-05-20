type ToDoContent = {
	_id: string;
	title?: string;
	tasks: TaskContent[];
};

type TaskContent = {
	_id: string;
	content: string;
	isComplete: boolean;
};