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
				className={`h-4 w-4 lg:h-6 lg:w-6 border-gray-500 border-2 lg:border-4 rounded-full inline-block cursor-pointer ${
					isChecked ? "bg-green-500 border-green-500" : ""
				}`}
			>
				<input
					disabled={isChecked}
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
