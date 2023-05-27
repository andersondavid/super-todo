import { useContext } from "react";
import { Task } from "./Task";
import { ContextDataTodo } from "@/context/DataTodoContext";

type PropsTypes = {
	_id: number;
	tasks: TaskContent[];
};

function TodoComponent({ _id, tasks }: PropsTypes) {
	const { changeDataTodo } = useContext(ContextDataTodo);
	const handleTaskCheckBox = (taskId: number, value: boolean) => {
		changeDataTodo({
			type: "UPDATE_TODO",
			payload: { todoId: _id, taskId, value },
		});
	};

	const removeTodo = () => {
		changeDataTodo({
			type: "REMOVE_TODO",
			payload: { todoId: _id },
		});
	};

	const fullyComplete = tasks.every((task) => task.isComplete);

	return (
		<div className="my-4 relative">
			<div
				className={`${
					fullyComplete ? "" : "shadow-md shadow-slate-400"
				} bg-slate-100 w-full rounded-3xl p-6 text-gray-900 overflow-hidden resize-none`}
			>
				{tasks.map((task) => (
					<Task
						content={task.content}
						isComplete={task.isComplete}
						_id={task._id}
						key={task._id}
						handleTaskCheckbox={handleTaskCheckBox}
					/>
				))}
				<button
					className={`${
						fullyComplete ? "opacity-50" : "opacity-0 hover:opacity-50"
					} absolute font-bold right-0 bottom-0 py-4  px-6`}
					onClick={removeTodo}
				>
					✕
				</button>
			</div>
		</div>
	);
}

export default TodoComponent;
