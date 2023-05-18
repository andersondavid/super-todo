import React, { useState } from "react";

export default function Checkbox({ checked }: { checked: boolean }) {
	const [isChecked, setIsChecked] = useState(checked);
	console.log('IsChecked', isChecked);
	
	return (
		<div className="inline">
			<label className={`h-6 w-6 border-gray-500 border-4 rounded-full inline-block cursor-pointer mr-2 ${isChecked ? 'bg-green-500 border-green-500' : ''}`}>
				<input
					onChange={(e) => setIsChecked(!isChecked)}
					checked={isChecked}
					type="checkbox"
					name="checkbox"
					id="asd"
					className="h-6 w-6 hidden"
				/>
			</label>
		</div>
	);
}
