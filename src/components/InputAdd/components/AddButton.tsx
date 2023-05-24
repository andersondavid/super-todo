import React, { MouseEvent } from "react";

type onClickFunction = { onClick: (event: MouseEvent) => void };

export default function AddButton(props: onClickFunction) {
	return (
		<button
			onClick={props.onClick}
			className="text-6xl bg-green-500 w-20 h-20 rounded-3xl pb-4 shadow-md shadow-slate-400 font"
		>
			+
		</button>
	);
}
