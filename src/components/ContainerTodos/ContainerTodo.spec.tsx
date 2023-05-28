import React, { useReducer } from "react";
import { fireEvent, render } from "@testing-library/react";
import { ContextDataTodo } from "@/context/DataTodoContext";
import ContainerTodo from "./ContainerTodo";
import { reducerContext } from "@/context/reducerContext";

const mockContextData = [
	{
		_id: 1,
		tasks: [
			{
				_id: 1,
				isComplete: false,
				content: "1 todo - 1 task",
			},
			{
				_id: 2,
				isComplete: true,
				content: "1 todo - 2 tasks",
			},
		],
	},
	{
		_id: 2,
		tasks: [
			{
				_id: 1,
				isComplete: false,
				content: "2 todo - 1 task",
			},
			{
				_id: 2,
				isComplete: true,
				content: "2 todo - 2 tasks",
			},
		],
	},
];

const TesterWrapper = () => {
	const [dataTodo, dispatchTodo] = useReducer(reducerContext, mockContextData);
	const changeDataTodo = (action: any) => {
		dispatchTodo(action);
	};
	return (
		<ContextDataTodo.Provider value={{ dataTodo, changeDataTodo }}>
			<ContainerTodo />,
		</ContextDataTodo.Provider>
	);
};

describe("<ContainerTodo ... />", () => {
	it("Render a simple task", () => {
		const { getByText } = render(<TesterWrapper />);
		expect(getByText(/^1 todo - 1 task/)).toBeInTheDocument();
	});

	it("Second task should complete", () => {
		const { queryAllByRole } = render(<TesterWrapper />);
		const checkbox = queryAllByRole("checkbox")[1] as HTMLInputElement;
		expect(checkbox.checked).toBe(true);
	});

	it("Delete second todo", () => {
		const { queryAllByText, getByText } = render(<TesterWrapper />);
		const secondTodo = getByText("2 todo - 1 task");
		const deleteButton2 = queryAllByText("✕")[1];

		fireEvent.click(deleteButton2);
		expect(secondTodo).not.toBeInTheDocument();
	});

	it("Message for no tasks", () => {
		const changeDataTodo = () => {};
		const { getByText } = render(
			<ContextDataTodo.Provider value={{ dataTodo: [], changeDataTodo }}>
				<ContainerTodo />
			</ContextDataTodo.Provider>
		);
		expect(getByText(/^Nenhuma tarefa/)).toBeInTheDocument();
	});
});
