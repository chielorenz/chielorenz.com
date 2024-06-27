import { ReactNode } from "react";
import { type Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Glypshs } from "@/components/Glyphs";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Home | Luca Lorenzini",
	description: "My personal website",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html suppressHydrationWarning>
			<body className="dark:bg-black dark:text-white">
				<ThemeProvider>
					<Glypshs />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
