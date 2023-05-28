import { render } from "@testing-library/react";
import TodoComponent from "./index";

describe("<TodoComponent ... />", () => {
	const mockData = {
		title: "My TodoComponet",
		_id: 1,
		tasks: [
			{ content: "My task component", isComplete: true, _id: 1 },
			{ content: "My other task component", isComplete: false, _id: 2 },
		],
	};

	const changeTodoState = jest.fn();

	afterEach(() => {});
	it("should render the title", () => {
		const { getByText } = render(
			<TodoComponent
				tasks={mockData.tasks}
				_id={mockData._id}
			/>
		);

		expect(getByText("My task component")).toBeInTheDocument();
	});

	it("should fist task true and second false", () => {
		const { getAllByRole } = render(
			<TodoComponent
				_id={mockData._id}
				tasks={mockData.tasks}
			/>
		);
		expect(getAllByRole("checkbox")[0]).toBeChecked();
		expect(getAllByRole("checkbox")[1]).not.toBeChecked();
	});
});
