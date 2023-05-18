import Checkbox from "./Checkbox";

type TaskContent = {
	content: string;
	isComplete: boolean;
};

function Title(props: TaskContent) {
	return (
		<h2 className="font-bold text-3xl">
			<Checkbox checked={props.isComplete} />
			<span className="m-2 text-gray-700a">{props.content}</span>
		</h2>
	);
}

function Task(props: TaskContent) {
	return (
		<span className="block text-3xl my-4 mx-10">
			<Checkbox checked={props.isComplete} />
			{props.content}
		</span>
	);
}

export default function TodoComponent() {
	return (
		<div className="shadow-md shadow-slate-400 w-full bg-slate-100 rounded-3xl p-10 pb-6 text-gray-900 overflow-hidden resize-none">
			<Title content={"Bom dia e cia"} isComplete={false} />
			<Task content={"Bom dia e cia"} isComplete={false} />
			<Task content={"Bom dia e cia"} isComplete={false} />
			<Task content={"Bom dia e cia"} isComplete={false} />
		</div>
	);
}
