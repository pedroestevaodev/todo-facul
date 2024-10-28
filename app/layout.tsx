import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
	title: "Todo List",
	description: "Um todo list simples para você organizar suas tarefas.",
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${fontSans.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
