import { ReactNode } from "react";
import { type Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Glypshs } from "@/components/Glyphs";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s | Luca Lorenzini",
		default: "Luca Lorenzini",
	},
	description: "Personal website",
	openGraph: {
		title: "Luca Lorenzini",
		description: "Personal website",
		url: "https://chielorenz.com",
		siteName: "chielorenz",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: process.env.PUBLIC_URL + "/og.png",
				width: 1200,
				height: 630,
			},
		],
	},
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html suppressHydrationWarning>
			<body className="dark:bg-neutral-900 dark:text-white">
				<ThemeProvider>
					<Glypshs />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
