import { render } from "@testing-library/react";
import ContextTodoProvider from "../../context/DataTodoContext";
import ContainerTodo from "./ContainerTodo";

describe.skip("<ContainerTodo ... />", () => {
	it("renderiza corretamente com um mock de ContextTodoProvider", () => {
		const { findByText, findAllByText } = render(
			<ContextTodoProvider>
				<ContainerTodo />
			</ContextTodoProvider>
		);

		expect(findByText("My TodoComponet")).toBeInTheDocument();
		expect(findAllByText("TodoComponet").then((d) => d.length)).toBe(2);
	});
});
