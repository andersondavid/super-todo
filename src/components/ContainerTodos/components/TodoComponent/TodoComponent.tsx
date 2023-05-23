import { Title } from "./Title";
import { Task } from "./Task";
import { useEffect, useState } from "react";

type PropsTypes = {
	_id: number;
	tasks: TaskContent[];
	title?: string;
	changeTodoState: (todoId: number, taskId: number, value: boolean) => void;
};

export default function TodoComponent({
	_id,
	tasks,
	title,
	changeTodoState,
}: PropsTypes) {
	const handleTaskCheckBox = (taskId: number, value: boolean) => {
		changeTodoState(_id, taskId, value);
	};

	const handleTitleCheckbox = (value: boolean) => {
		tasks.map((task: TaskContent) => (task.isComplete = value));
	};

	const todoIsCompletedCheck = tasks.every(
		(task: TaskContent) => task.isComplete
	);

	return (
		<div className="my-6">
			<div className="shadow-md shadow-slate-400 w-full bg-slate-100 rounded-3xl p-6 text-gray-900 overflow-hidden resize-none">
				{title && (
					<Title
						content={title}
						isCompleted={todoIsCompletedCheck}
						_id={_id}
						handleTitleCheckbox={handleTitleCheckbox}
					/>
				)}
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
