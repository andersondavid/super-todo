import { Inter } from "next/font/google";
import InputAdd from "@/components/InputAdd";
import ContainerTodo from "@/components/ContainerTodos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex h-screen flex-col items-center justify-between ${inter.className}`}>
			<ContainerTodo />
			<InputAdd />
		</main>
	);
}
 