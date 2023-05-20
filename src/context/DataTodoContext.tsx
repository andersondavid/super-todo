import React, { createContext } from "react";

const DataTodo: ToDoContent[] = [
	{
		title: "My TodoComponet",
		_id: "1",
		tasks: [
			{ content: "My task component", isComplete: true, _id: "1" },
			{ content: "My task component", isComplete: true, _id: "1" },
		],
	},
	{
		title: "My TodoComponet",
		_id: "1",
		tasks: [
			{ content: "My task component", isComplete: true, _id: "1" },
			{ content: "My task component", isComplete: true, _id: "1" },
		],
	},
	{
		title: "My TodoComponet",
		_id: "1",
		tasks: [
			{ content: "My task component", isComplete: true, _id: "1" },
			{ content: "My task component", isComplete: true, _id: "1" },
		],
	},
	{
		title: "My TodoComponet",
		_id: "1",
		tasks: [
			{ content: "My task component", isComplete: true, _id: "1" },
			{ content: "My task component", isComplete: true, _id: "1" },
		],
	},
	{
		title: "My TodoComponet",
		_id: "1",
		tasks: [
			{ content: "My task component", isComplete: true, _id: "1" },
			{ content: "My task component", isComplete: true, _id: "1" },
		],
	},
	{
		title: "My TodoComponet",
		_id: "1",
		tasks: [
			{ content: "My task component", isComplete: true, _id: "1" },
			{ content: "My task component", isComplete: true, _id: "1" },
		],
	},
	{
		title: "My TodoComponet",
		_id: "1",
		tasks: [
			{ content: "My task component", isComplete: true, _id: "1" },
			{ content: "My task component", isComplete: true, _id: "1" },
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
