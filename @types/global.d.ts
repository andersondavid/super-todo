type ToDoContent = {
	_id: number;
	title?: string;
	tasks: TaskContent[];
};

type TaskContent = {
	_id: number;
	content: string;
	isComplete: boolean;
};