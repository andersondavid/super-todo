import Checkbox from "./Checkbox";

type TitlePropTypes = {
	_id: number;
	content: string;
	isCompleted: boolean;
	handleTitleCheckbox: (value: boolean) => void;
};

export function Title(props: TitlePropTypes) {
	const setChecked = (checked: boolean) => {
		props.handleTitleCheckbox(!checked);
	};

	return (
		<h2 className="font-bold text-3xl p-2">
			<Checkbox checked={props.isCompleted} setChecked={setChecked} />
			<span className="m-2 text-gray-700a">{props.content}</span>
		</h2>
	);
}
