import React, { createContext } from "react";

type ContextType = {
	dataTodo: ToDoContent[];
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
];

export const ContextDataTodo = createContext({} as ContextType);

export default function DataTodoContext({
	children,
}: {
	children: JSX.Element;
}) {
	let dataTodo = DataTodoInitial;

	return (
		<ContextDataTodo.Provider value={{ dataTodo }}>
			{children}
		</ContextDataTodo.Provider>
	);
}
