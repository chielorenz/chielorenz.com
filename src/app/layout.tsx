import { ReactNode } from "react";
import { type Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { GliphsProvider } from "@/contexts/GliphsProvider";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

export const metadata: Metadata = {
	title: "Home | Luca Lorenzini",
	description: "My personal website",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html suppressHydrationWarning>
			<body className="dark:bg-black dark:text-white">
				<ThemeScript />
				<ThemeProvider attribute="class">
					<GliphsProvider>{children}</GliphsProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
