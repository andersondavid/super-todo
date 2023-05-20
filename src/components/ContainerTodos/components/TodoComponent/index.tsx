import Checkbox from "./Checkbox";

function Title(props: TaskContent) {
	return (
		<h2 className="font-bold text-3xl">
			<Checkbox checked={props.isComplete} />
			<span className="m-2 text-gray-700a">{props.content}</span>
		</h2>
	);
}

function Task(props: TaskContent) {
	return (
		<span className="block text-3xl my-4 mx-10">
			<Checkbox checked={props.isComplete} />
			{props.content}
		</span>
	);
}

export default function TodoComponent(props: ToDoContent) {
	const { tasks, title, _id } = props;
	const isCompleteTodo = tasks.findIndex(task => task.isComplete == false) != 0
	return (
			<div className="my-6">
				<div className="shadow-md shadow-slate-400 w-full bg-slate-100 rounded-3xl p-10 pb-6 text-gray-900 overflow-hidden resize-none">
					{title && <Title content={title} isComplete={isCompleteTodo} _id={_id} />}
					{tasks.map((task) => (
						<Task
							content={task.content}
							isComplete={task.isComplete}
							_id={task._id}
							key={task._id}
						/>
					))}
				</div>
		</div>
	);
}
