import DataTodoContext from "@/context/DataTodoContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<DataTodoContext>
			<Component {...pageProps} />
		</DataTodoContext>
	);
}
