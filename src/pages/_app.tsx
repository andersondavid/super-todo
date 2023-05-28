import { useReducer } from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ContextDataTodo, DataTodoInitial } from "@/context/DataTodoContext";
import { reducerContext } from "@/context/reducerContext";

export default function App({ Component, pageProps }: AppProps) {
	const [dataTodo, dispatchTodo] = useReducer(reducerContext, DataTodoInitial);

	const changeDataTodo = (action: ActionType) => {
		dispatchTodo(action);
	};

	return (
		<ContextDataTodo.Provider value={{ dataTodo, changeDataTodo }}>
			<Component {...pageProps} />
		</ContextDataTodo.Provider>
	);
}
