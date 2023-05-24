import { fireEvent, render } from "@testing-library/react";
import InputAdd from "./InputAdd";
import { ContextDataTodo } from "@/context/DataTodoContext";

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

const changeDataTodo = jest.fn();
const wrapper = ({ children }: { children: JSX.Element }) => (
	<ContextDataTodo.Provider
		value={{ dataTodo: mockContextData, changeDataTodo }}
	>
		{children}
	</ContextDataTodo.Provider>
);

describe("<InputAdd />", () => {
	it("Resize area", () => {
		const { getByRole } = render(<InputAdd />);
		const textarea = getByRole("textbox") as HTMLTextAreaElement;

		fireEvent.change(textarea, {
			target: {
				value: `first task
		second task
		third task`,
			},
		});

		expect(textarea.rows).toBe(3);
	});

	it("Add a todo", () => {
		const { getByRole } = render(<InputAdd />, { wrapper });
		const textarea = getByRole("textbox") as HTMLTextAreaElement;
		const buttonSubmit = getByRole("button");

		fireEvent.change(textarea, {
			target: {
				value: `first task
		second task
		third task`,
			},
		});

		fireEvent.click(buttonSubmit);
		expect(changeDataTodo).toBeCalled();

	});
});
