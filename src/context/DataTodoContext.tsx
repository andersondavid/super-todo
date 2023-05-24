import { createContext } from "react";

type ContextType = {
	dataTodo: ToDoContent[];
	changeDataTodo: (dataTodo: ToDoContent[]) => void;
};

export const DataTodoInitial: ToDoContent[] = [];

export const ContextDataTodo = createContext({} as ContextType);
