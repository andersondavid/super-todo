import InputAdd from "@/components/InputAdd";
import ContainerTodo from "@/components/ContainerTodos";

const allTodos = [{
	title: "My TodoComponet",
	_id: "1",
	tasks: [{content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, ],
},{
	title: "My TodoComponet",
	_id: "1",
	tasks: [{content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, ],
},{
	title: "My TodoComponet",
	_id: "1",
	tasks: [{content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, ],
},{
	title: "My TodoComponet",
	_id: "1",
	tasks: [{content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, ],
},{
	title: "My TodoComponet",
	_id: "1",
	tasks: [{content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, ],
},{
	title: "My TodoComponet",
	_id: "1",
	tasks: [{content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, ],
},{
	title: "My TodoComponet",
	_id: "1",
	tasks: [{content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, {content: "My task component", isComplete: true, _id: "1" }, ],
},];

export default function Home() {
	return (
		<main className={`flex h-screen flex-col items-center justify-between`}>
			<ContainerTodo allTodos={allTodos}/>
			<InputAdd />
		</main>
	);
}
