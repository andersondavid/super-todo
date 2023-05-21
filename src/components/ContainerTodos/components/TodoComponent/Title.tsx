import Checkbox from "./Checkbox";

type TitlePropTypes = {
	_id: number;
	content: string;
	isComplete: boolean;
	handleTaskCheckbox: (value: boolean) => void;
};

export function Title(props: TitlePropTypes) {
	const setChecked = (checked: boolean) => {
		props.handleTaskCheckbox(checked);
	};

	return (
		<h2 className="font-bold text-3xl">
			<Checkbox checked={props.isComplete} setChecked={setChecked} />
			<span className="m-2 text-gray-700a">{props.content}</span>
		</h2>
	);
}
