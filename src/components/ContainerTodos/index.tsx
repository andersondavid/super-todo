import React from "react";
import TodoComponent from "./components/TodoComponent";

export default function ContainerTodo() {
	return (
		<div className="w-full h-screen overflow-auto scrollbar-hide">
			<div className="max-w-4xl m-auto">
				<div className="my-6">
					<TodoComponent />
				</div>
				<div className="my-6">
					<TodoComponent />
				</div>
				<div className="my-6">
					<TodoComponent />
				</div>
				<div className="my-6">
					<TodoComponent />
				</div>
				<div className="my-6">
					<TodoComponent />
				</div>
				<div className="my-6">
					<TodoComponent />
				</div>
			</div>
		</div>
	);
}
