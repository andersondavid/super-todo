import InputAdd from "@/components/InputAdd";
import ContainerTodo from "@/components/ContainerTodos";

export default function Home() {

	return (
		<main className={`flex h-screen flex-col items-center justify-between`}>
			<ContainerTodo />
			<InputAdd />
		</main>
	);
}
