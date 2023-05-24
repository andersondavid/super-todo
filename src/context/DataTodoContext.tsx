import React, { createContext, useState } from "react";

type ContextType = {
	dataTodo: ToDoContent[];
	changeDataTodo: (dataTodo: ToDoContent[]) => void;
};

const DataTodoInitial: ToDoContent[] = [];

export const ContextDataTodo = createContext({} as ContextType);

function ContextTodoProvider({ children }: { children: JSX.Element }) {
	const [dataTodo, setDataTodo] = useState(DataTodoInitial);

	const changeDataTodo = (dataTodo: ToDoContent[]) => {
		setDataTodo(dataTodo)
	};

	console.log('dataTodoProvider', JSON.stringify(dataTodo, null, 2));
	

	return (
		<ContextDataTodo.Provider value={{ dataTodo, changeDataTodo }}>
			{children}
		</ContextDataTodo.Provider>
	);
}

export default ContextTodoProvider;
