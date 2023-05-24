import { ContextDataTodo, DataTodoInitial } from "@/context/DataTodoContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [dataTodo, setDataTodo] = useState(DataTodoInitial);

	const changeDataTodo = (dataTodo: ToDoContent[]) => {
		setDataTodo(dataTodo);
	};

	return (
		<ContextDataTodo.Provider value={{ dataTodo, changeDataTodo }}>
			<Component {...pageProps} />
		</ContextDataTodo.Provider>
	);
}
