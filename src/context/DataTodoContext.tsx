import React, { createContext } from "react";

const DataTodo: ToDoContent[] = [
	{
		title: "My TodoComponet",
		_id: 1,
		tasks: [
			{ content: "My task component", isComplete: true, _id: 1 },
			{ content: "My task component", isComplete: true, _id: 2 },
		],
	},
	{
		title: "My TodoComponet",
		_id: 2,
		tasks: [
			{ content: "My task component", isComplete: true, _id: 1 },
			{ content: "My task component", isComplete: true, _id: 2 },
		],
	},
	{
		title: "My TodoComponet",
		_id: 3,
		tasks: [
			{ content: "My task component", isComplete: true, _id: 1 },
			{ content: "My task component", isComplete: true, _id: 2 },
		],
	},
	{
		title: "My TodoComponet",
		_id: 4,
		tasks: [
			{ content: "My task component", isComplete: true, _id: 1 },
			{ content: "My task component", isComplete: true, _id: 2 },
		],
	},
	{
		title: "My TodoComponet",
		_id: 5,
		tasks: [
			{ content: "My task component", isComplete: true, _id: 1 },
			{ content: "My task component", isComplete: true, _id: 2 },
		],
	},
	{
		title: "My TodoComponet",
		_id: 6,
		tasks: [
			{ content: "My task component", isComplete: true, _id: 1 },
			{ content: "My task component", isComplete: true, _id: 2 },
		],
	},
	{
		title: "My TodoComponet",
		_id: 7,
		tasks: [
			{ content: "My task component", isComplete: true, _id: 1 },
			{ content: "My task component", isComplete: true, _id: 2 },
		],
	},
];

export const ContextDataTodo = createContext({
	DataTodo,
});

export default function DataTodoContext({
	children,
}: {
	children: JSX.Element;
}) {
	return (
		<ContextDataTodo.Provider value={{ DataTodo }}>
			{children}
		</ContextDataTodo.Provider>
	);
}
