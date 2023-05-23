import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import AddButton from "./components/AddButton";

import { ContextDataTodo } from "@/context/DataTodoContext";

export default function InputAdd() {
	const { dataTodo, changeDataTodo } = useContext(ContextDataTodo);
	const [textValue, setTextValue] = useState<string>("");
	const [numRows, setNumRows] = useState<number>(1);

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
			.filter(task => task != '')
			.map((task, index) => {
					return {
						_id: index + 1,
						isComplete: false,
						content: task,
					};
			});

		console.log("taskArray", taskArray);

		const newTodo: ToDoContent = {
			_id: dataTodo.length + 1,
			tasks: taskArray,
		};

		changeDataTodo([...dataTodo, newTodo]);

		setTextValue("");
	};

	return (
		<div className="w-full flex justify-center max-w-4xl py-8 relative">
			<textarea
				value={textValue}
				onChange={(e) => handleInputChange(e)}
				rows={numRows}
				className="outline-0 shadow-md shadow-slate-400 w-full bg-white rounded-3xl p-8 text-gray-900 text-3xl overflow-hidden resize-none"
			/>
			<div className="absolute right-2 bottom-10">
				<AddButton onClick={handleAddButtonClick} />
			</div>
		</div>
	);
}
