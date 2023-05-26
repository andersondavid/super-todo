import React, { useContext } from "react";
import TodoComponent from "./components/TodoComponent";
import { ContextDataTodo } from "@/context/DataTodoContext";

export default function ContainerTodo() {
	const { dataTodo } = useContext(ContextDataTodo);

	const todosIncomplete: ToDoContent[] = dataTodo.filter((todo) => {
		return todo.tasks.some((task) => task.isComplete == false);
	});

	const todosComplete: ToDoContent[] = dataTodo.filter((todo) => {
		return todo.tasks.every((task) => task.isComplete == true);
	});

	return (
		<div className="w-full h-screen overflow-auto scrollbar-hide">
			<div className="max-w-4xl m-auto py-4">
				{todosIncomplete &&
					todosIncomplete
						.map((todo) => (
							<TodoComponent
								tasks={todo.tasks}
								_id={todo._id}
								key={todo._id}
							/>
						))
						.reverse()}
				{todosComplete.length > 0 && (
					<div className="text-3xl text-center opacity-50">
						Tarefas concluidas
					</div>
				)}
				{todosComplete &&
					todosComplete
						.map((todo) => (
							<TodoComponent
								tasks={todo.tasks}
								_id={todo._id}
								key={todo._id}
							/>
						))
						.reverse()}
				{dataTodo.length == 0 && (
					<div className="text-3xl text-center pt-20 opacity-50">
						Nenhuma tarefa. Adicione agora!
					</div>
				)}
			</div>
		</div>
	);
}
