import React, {
	ChangeEvent,
	useContext,
	useEffect,
	useState,
	useRef,
} from "react";
import AddButton from "./components/AddButton";
import FakeCheckbox from "./components/FakeCheckbox";

import { ContextDataTodo } from "@/context/DataTodoContext";

export default function InputAdd() {
	const { dataTodo, changeDataTodo } = useContext(ContextDataTodo);
	const [textValue, setTextValue] = useState<string>("");
	const [numRows, setNumRows] = useState<number>(1);
	const textareRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const splitTaskText = textValue.split("\n");
		setNumRows(splitTaskText.length);
	}, [textValue]);

	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTextValue(event.target.value);
	};

	const handleAddButtonClick = () => {
		const taskArray: TaskContent[] = textValue
			.split("\n")
			.filter((task) => task != "")
			.map((task, index) => {
				return {
					_id: index + 1,
					isComplete: false,
					content: task,
				};
			});

		const newTodo: ToDoContent = {
			_id: dataTodo.length + 1,
			tasks: taskArray,
		};

		if (taskArray.length > 0) {
			changeDataTodo([...dataTodo, newTodo]);
			setTextValue("");
			textareRef.current?.focus()
		} else {
			alert("Você precisa de pelo menos uma tarefa");
		}
	};

	return (
		<div className="w-full max-w-4xl py-8">
			<div className="flex shadow-md shadow-slate-400 justify-center relative bg-white rounded-3xl p-2">
				<div className="p-2 ml-6">
					<FakeCheckbox textValue={textValue} />
				</div>
				<textarea
					ref={textareRef}
					value={textValue}
					onChange={(e) => handleInputChange(e)}
					rows={numRows}
					className="outline-0 w-full leading-[1.60em] p-5 pl-2 text-gray-900 text-3xl overflow-hidden resize-none"
				/>
				<div className="p-1">
					<AddButton onClick={handleAddButtonClick} />
				</div>
			</div>
		</div>
	);
}
