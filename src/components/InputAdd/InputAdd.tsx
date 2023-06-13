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
	const { changeDataTodo } = useContext(ContextDataTodo);
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
		if (textValue != "") {
			changeDataTodo({
				type: "ADD_TODO",
				payload: textValue,
			});
			setTextValue("");
			textareRef.current?.focus();
		} else {
			alert("Você precisa de pelo menos uma tarefa");
		}
	};

	return (
		<div className="w-full max-w-4xl py-8 p-3">
			<div className="flex shadow-md shadow-slate-400 justify-center relative bg-white rounded-3xl lg:rounded-3xl pl-2 lg:py-1 lg:px-2">
				<div className="p-2 ml-1 lg:ml-6">
					<FakeCheckbox textValue={textValue} />
				</div>
				<textarea
					ref={textareRef}
					value={textValue}
					onChange={(e) => handleInputChange(e)}
					rows={numRows}
					className="outline-0 w-full p-4 pl-2 text-gray-900 text-xl leading-8 lg:text-3xl lg:leading-[1.60em] overflow-hidden resize-none"
				/>
				<div className="lg:p-1">
					<AddButton onClick={handleAddButtonClick} />
				</div>
			</div>
		</div>
	);
}
