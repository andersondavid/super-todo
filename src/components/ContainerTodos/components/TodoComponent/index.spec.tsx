import { render } from "@testing-library/react";
import TodoComponent from "./index";

describe("<TodoComponent ... />", () => {
	const mockData = {
		title: "My TodoComponet",
		_id: 1,
		tasks: [{ content: "My task component", isComplete: true, _id: 1 }],
	};

	afterEach(() => {});
	it("should render the title", () => {
		const { getByText } = render(
			<TodoComponent
				tasks={mockData.tasks}
				_id={mockData._id}
				title={mockData.title}
			/>
		);

		expect(getByText("My TodoComponet")).toBeInTheDocument();
	});

	it("should render the whole component unless the title", () => {
		const { queryByText } = render(
			<TodoComponent _id={mockData._id} tasks={mockData.tasks} />
		);
		expect(queryByText("My TodoComponet")).not.toBeInTheDocument();
	});

	it("should set the first task to true", () => {
		const { getAllByRole } = render(
			<TodoComponent _id={mockData._id} tasks={mockData.tasks} />
		);
		expect(getAllByRole("checkbox")[0]).toBeChecked();
	});
});
