import { ReactNode } from "react";
import { type Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
	title: "chielorenz",
	description: "My personal website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="dark:bg-black dark:text-white">
				<ThemeProvider attribute="class">{children}</ThemeProvider>
			</body>
		</html>
	);
}
