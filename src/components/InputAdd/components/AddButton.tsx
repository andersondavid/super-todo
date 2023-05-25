import React, { MouseEvent } from "react";

type onClickFunction = { onClick: (event: MouseEvent) => void };

export default function AddButton(props: onClickFunction) {
	return (
		<button
			onClick={props.onClick}
			className="text-6xl pb-5 bg-green-500 border-green-500 outline-none w-20 h-20 rounded-3xl shadow-md shadow-slate-400 border-4 focus:border-blue-500"
		>
			+
		</button>
	);
}
