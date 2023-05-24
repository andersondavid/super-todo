import { createContext } from "react";

type ContextType = {
	dataTodo: ToDoContent[];
	changeDataTodo: (dataTodo: ToDoContent[]) => void;
};

export const DataTodoInitial: ToDoContent[] = [
	{
		_id: 1,
		tasks: [
			{
				_id: 1,
				isComplete: false,
				content: "First task",
			},
		],
	},
];

export const ContextDataTodo = createContext({} as ContextType);
