import React from 'react';
type Props = {
	textValue: string;
};

export default function FakeCheckbox({ textValue }: Props): JSX.Element {

	const checkboxArray = textValue.split("\n").map((task, index) => {
		if(task != '' || index == 0) {
			return <div key={index} className="my-6 h-6 w-6 border-gray-500 border-4 rounded-full cursor-pointer"></div>
		} else {
			return <div key={index} className="my-6 h-6 w-6"></div>
		}
	})

	return <>{checkboxArray}</>;
}
