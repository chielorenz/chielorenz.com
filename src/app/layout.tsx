import { ReactNode } from "react";
import { type Metadata } from "next";
import { ThemeProvider, ThemeScripts } from "@/contexts/ThemeProvider";
import Glypsh from "@/components/Glyphs";
import "./globals.css";

export const metadata: Metadata = {
	title: "Home | Luca Lorenzini",
	description: "My personal website",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html suppressHydrationWarning>
			<body className="dark:bg-black dark:text-white">
				<ThemeProvider>
					<ThemeScripts />
					<Glypsh />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
