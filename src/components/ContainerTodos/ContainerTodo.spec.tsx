import React, { ReactElement } from "react";
import { render } from "@testing-library/react";

import { ContextDataTodo } from "@/context/DataTodoContext";
import ContainerTodo from "./ContainerTodo";

const mockContextData = [
	{
		_id: 1,
		tasks: [
			{
				_id: 1,
				isComplete: false,
				content: "mock task",
			},
			{
				_id: 2,
				isComplete: true,
				content: "second mock task",
			},
		],
	},
];

const changeDataTodo = () => {
	jest.fn();
};

const wrapper = ({ children }: { children: JSX.Element }) => (
	<ContextDataTodo.Provider
		value={{ dataTodo: mockContextData, changeDataTodo }}
	>
		{children}
	</ContextDataTodo.Provider>
);

describe("<ContainerTodo ... />", () => {
	it("Render a simple task", () => {
		const { getByText } = render(<ContainerTodo />, { wrapper });
		expect(getByText(/^mock task/)).toBeInTheDocument();
	});

	it("Second task should complete", () => {
		const { queryAllByRole } = render(<ContainerTodo />, { wrapper });
		const checkbox = queryAllByRole("checkbox")[1] as HTMLInputElement;
		expect(checkbox.checked).toBe(true);
	});

	it("Message for no tasks", () => {
		const { getByText } = render(
			<ContextDataTodo.Provider
				value={{ dataTodo: [], changeDataTodo }}
			>
				<ContainerTodo />
			</ContextDataTodo.Provider>
		);
		expect(getByText(/^Nenhuma tarefa/)).toBeInTheDocument();
	});
});
