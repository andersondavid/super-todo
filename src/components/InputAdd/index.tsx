import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import AddButton from "./components/AddButton";

export default function InputAdd() {
	const [textValue, setTextValue] = useState<string>("");
	const [numRows, setNumRows] = useState<number>(1);

	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const taskText = event.target.value;
		const splitTaskText = taskText.split("\n");

		setTextValue(taskText);
		setNumRows(splitTaskText.length);
	};

	const handleAddButtonClick = () => {
		console.log("textValue", textValue.split("\n"));
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
