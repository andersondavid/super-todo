import { Title } from "./Title";
import { Task } from "./Task";

export default function TodoComponent(props: ToDoContent) {
	const { tasks, title, _id } = props;
	const isCompleteTodo =
		tasks.findIndex((task) => task.isComplete == false) != 0;

	const handleTaskCheckbox = (taskId: number, value: boolean) => {
		console.log(_id, taskId, value);
	};
	const handleTodoCheckbox = (value: boolean) => {
		console.log(_id, value);
	};

	return (
		<div className="my-6">
			<div className="shadow-md shadow-slate-400 w-full bg-slate-100 rounded-3xl p-10 pb-6 text-gray-900 overflow-hidden resize-none">
				{title && (
					<Title
						content={title}
						isComplete={isCompleteTodo}
						_id={_id}
						handleTaskCheckbox={handleTodoCheckbox}
					/>
				)}
				{tasks.map((task) => (
					<Task
						content={task.content}
						isComplete={task.isComplete}
						_id={task._id}
						key={task._id}
						handleTaskCheckbox={handleTaskCheckbox}
					/>
				))}
			</div>
		</div>
	);
}
