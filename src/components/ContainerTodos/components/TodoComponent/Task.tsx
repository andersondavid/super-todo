import Checkbox from "./Checkbox";

type TaskPropTypes = {
	_id: number;
	content: string;
	isComplete: boolean;
	handleTaskCheckbox: (taskId: number, value: boolean) => void;
};

export function Task(props: TaskPropTypes) {
	const setChecked = (checked: boolean) => {
		props.handleTaskCheckbox(props._id, !checked);
	};

	return (
		<span
			className={`block text-3xl my-4 mx-10 ${
				props.isComplete ? "line-through opacity-50" : ""
			}`}
		>
			<Checkbox checked={props.isComplete} setChecked={setChecked} />
			{props.content}
		</span>
	);
}
