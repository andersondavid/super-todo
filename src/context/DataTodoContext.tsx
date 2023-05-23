import React, { createContext, useEffect, useState } from "react";

type ContextType = {
	dataTodo: ToDoContent[];
	changeTodoState: (todoId: number, taskId: number, value: boolean) => void;
};

const DataTodoInitial: ToDoContent[] = [
	{
		_id: 1,
		tasks: [
			{ content: "My task component", isComplete: false, _id: 1 },
			{ content: "My other component", isComplete: false, _id: 2 },
			{ content: "My other component", isComplete: false, _id: 3 },
		],
	},
	{
		_id: 2,
		tasks: [
			{ content: "My task component", isComplete: false, _id: 1 },
			{ content: "My other component", isComplete: false, _id: 2 },
			{ content: "My other component", isComplete: false, _id: 3 },
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
		setDataTodo(allData)
	};

	console.log('dataTodoProvider', JSON.stringify(dataTodo, null, 2));
	

	return (
		<ContextDataTodo.Provider value={{ dataTodo, changeTodoState }}>
			{children}
		</ContextDataTodo.Provider>
	);
}

export default ContextTodoProvider;
