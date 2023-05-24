import React, { useContext } from "react";
import TodoComponent from "./components/TodoComponent";
import { ContextDataTodo } from "@/context/DataTodoContext";

export default function ContainerTodo() {
	const { dataTodo, changeDataTodo } = useContext(ContextDataTodo);

	const changeTodoState = (todoId: number, taskId: number, value: boolean) => {
		let newData = dataTodo.map((todo) => {
			if (todo._id === todoId) {
				let newTodo = todo.tasks.map((task) => {
					if (task._id == taskId) {
						return { ...task, isComplete: value };
					}
					return task;
				});

				return {...todo, tasks: newTodo};
			}
			return todo;
		});
		changeDataTodo(newData)
	};

	return (
		<div className="w-full h-screen overflow-auto scrollbar-hide">
			<div className="max-w-4xl m-auto">
				{dataTodo && dataTodo.map((todo) => (
					<TodoComponent tasks={todo.tasks} _id={todo._id} key={todo._id} changeTodoState={changeTodoState}/>
				)).reverse()}
				{dataTodo.length == 0 && <div className="text-3xl text-center pt-20 opacity-50">Nenhuma tarefa. Adicione agora!</div>}
			</div>
		</div>
	);
}
