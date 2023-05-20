import InputAdd from "@/components/InputAdd";
import ContainerTodo from "@/components/ContainerTodos";
import { useContext } from "react";
import { ContextDataTodo } from "@/context/DataTodoContext";

export default function Home() {
	const allTodos = useContext(ContextDataTodo);

	return (
		<main className={`flex h-screen flex-col items-center justify-between`}>
			<ContainerTodo allTodos={allTodos.DataTodo} />
			<InputAdd />
		</main>
	);
}
