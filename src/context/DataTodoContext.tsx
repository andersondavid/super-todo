import { createContext } from "react";

type ContextType = {
	dataTodo: ToDoContent[];
	changeDataTodo: (action: ActionType) => void;
};

export const DataTodoInitial: ToDoContent[] = [];

export const ContextDataTodo = createContext({} as ContextType);
