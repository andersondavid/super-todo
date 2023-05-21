import React, { useContext } from "react";
import TodoComponent from "./components/TodoComponent";
import { ContextDataTodo } from "@/context/DataTodoContext";

export default function ContainerTodo() {
	const { DataTodo } = useContext(ContextDataTodo);

	return (
		<div className="w-full h-screen overflow-auto scrollbar-hide">
			<div className="max-w-4xl m-auto">
				{DataTodo.map((todo) => (
					<TodoComponent
						_id={todo._id}
						tasks={todo.tasks}
						key={todo._id}
						title={todo.title}
					/>
				))}
			</div>
		</div>
	);
}
