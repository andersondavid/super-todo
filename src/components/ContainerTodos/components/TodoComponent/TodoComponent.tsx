import { Title } from "./Title";
import { Task } from "./Task";

type PropsTypes = {
	_id: number;
	tasks: TaskContent[];
	title?: string;
};

export default function TodoComponent({ _id, tasks, title }: PropsTypes) {
	return (
		<div className="my-6">
			<div className="shadow-md shadow-slate-400 w-full bg-slate-100 rounded-3xl p-10 pb-6 text-gray-900 overflow-hidden resize-none">
				{title && (
					<Title
						content={title}
						isComplete={true}
						_id={_id}
						handleTaskCheckbox={() => {}}
					/>
				)}
				{tasks.map((task) => (
					<Task
						content={task.content}
						isComplete={task.isComplete}
						_id={task._id}
						key={task._id}
						handleTaskCheckbox={() => {}}
					/>
				))}
			</div>
		</div>
	);
}
