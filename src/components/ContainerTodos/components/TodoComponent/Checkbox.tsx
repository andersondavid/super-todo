import React, { useEffect, useState } from "react";

type PropTypes = {
	checked: boolean;
	setChecked: (arg0: boolean) => void;
};

export default function Checkbox({ checked, setChecked }: PropTypes) {
	const [isChecked, setIsChecked] = useState(checked);
	const handleChange = () => {
		setChecked(isChecked);
		setIsChecked(!isChecked);
	};
	useEffect(() => setIsChecked(checked), [checked]);
	
	return (
		<div className="inline">
			<label
				className={`h-6 w-6 border-gray-500 border-4 rounded-full inline-block cursor-pointer mr-2 ${
					isChecked ? "bg-green-500 border-green-500" : ""
				}`}
			>
				<input
					onChange={handleChange}
					checked={isChecked}
					type="checkbox"
					name="checkbox"
					className="hidden"
				/>
			</label>
		</div>
	);
}
