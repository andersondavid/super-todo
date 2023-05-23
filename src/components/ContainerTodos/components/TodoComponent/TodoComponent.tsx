import { Task } from "./Task";

type PropsTypes = {
	_id: number;
	tasks: TaskContent[];
	changeTodoState: (todoId: number, taskId: number, value: boolean) => void;
};

function TodoComponent({ _id, tasks, changeTodoState }: PropsTypes) {

	const handleTaskCheckBox = (taskId: number, value: boolean) => {
		changeTodoState(_id, taskId, value);
	};

	return (
		<div className="my-6">
			<div className="shadow-md shadow-slate-400 w-full bg-slate-100 rounded-3xl p-6 text-gray-900 overflow-hidden resize-none">
				{tasks.map((task) => (
					<Task
						content={task.content}
						isComplete={task.isComplete}
						_id={task._id}
						key={task._id}
						handleTaskCheckbox={handleTaskCheckBox}
					/>
				))}
			</div>
		</div>
	);
}

export default TodoComponent;
