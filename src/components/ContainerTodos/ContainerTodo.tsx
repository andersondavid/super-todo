import React, { useContext } from "react";
import TodoComponent from "./components/TodoComponent";
import { ContextDataTodo } from "@/context/DataTodoContext";

export default function ContainerTodo() {
	const { dataTodo } = useContext(ContextDataTodo);

	return (
		<div className="w-full h-screen overflow-auto scrollbar-hide">
			<div className="max-w-4xl m-auto">
				{dataTodo.map((todo) => (
					<TodoComponent tasks={todo.tasks} _id={todo._id} key={todo._id} />
				))}
			</div>
		</div>
	);
}
