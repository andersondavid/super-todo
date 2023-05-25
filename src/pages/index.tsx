import InputAdd from "@/components/InputAdd";
import ContainerTodo from "@/components/ContainerTodos";
import Head from "next/head";

export default function Home() {
	return (
		<main className={`flex h-screen flex-col items-center justify-between`}>
			<Head>
				<title>Simples App de Tarefas</title>
				<meta property="og:title" content="Simples App de Tarefas" key="title" />
			</Head>
			<ContainerTodo />
			<InputAdd />
		</main>
	);
}
