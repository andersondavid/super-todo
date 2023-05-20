import React from "react";
import TodoComponent from "./components/TodoComponent";

export default function ContainerTodo({
	allTodos,
}: {
	allTodos: ToDoContent[];
}) {
	return (
		<div className="w-full h-screen overflow-auto scrollbar-hide">
			<div className="max-w-4xl m-auto">
				{allTodos.map((todo) => (
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
