import React, { createContext, useState } from "react";

type ContextType = {
	dataTodo: ToDoContent[];
	changeTodoState: (todoId: number, taskId: number, value: boolean) => void;
};

const DataTodoInitial: ToDoContent[] = [
	{
		title: "My TodoComponet",
		_id: 1,
		tasks: [
			{ content: "My task component", isComplete: false, _id: 1 },
			{ content: "My other component", isComplete: false, _id: 2 },
		],
	},
	{
		title: "My other TodoComponet",
		_id: 2,
		tasks: [
			{ content: "My task component", isComplete: false, _id: 1 },
			{ content: "My other component", isComplete: false, _id: 2 },
		],
	},
];

export const ContextDataTodo = createContext({} as ContextType);

function ContextTodoProvider({ children }: { children: JSX.Element }) {
	const [dataTodo, setDataTodo] = useState(DataTodoInitial);

	const changeTodoState = (todoId: number, taskId: number, value: boolean) => {
		let allData = dataTodo.map((todo) => {
			if (todo._id === todoId) {
				let newTodo = todo.tasks.map((task) => {
					if (task._id == taskId) {
						return { ...task, isComplete: value };
					}
					return task;
				});

				return {...todo, tasks: newTodo};
			}
			return todo;
		});
		setDataTodo(allData);
		console.log("allData", JSON.stringify(allData, null, 2));
	};

	return (
		<ContextDataTodo.Provider value={{ dataTodo, changeTodoState }}>
			{children}
		</ContextDataTodo.Provider>
	);
}

export default ContextTodoProvider;
