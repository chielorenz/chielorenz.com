"use client";
import { useTheme } from "@/contexts/ThemeProvider";
import Image from "next/image";
import sun from "@/images/sun.svg";
import moon from "@/images/moon.svg";

export default function LightSwitch() {
	const { setMode } = useTheme();

	const commonProps = {
		alt: "Toggle light/dark mode",
		width: 16,
		priority: true,
	};

	return (
		<div className="cursor-pointer">
			<Image
				{...commonProps}
				src={sun}
				className="light:block dark:hidden"
				onClick={() => setMode("dark")}
			/>
			<Image
				{...commonProps}
				src={moon}
				className="light:hidden dark:block"
				onClick={() => setMode("light")}
			/>
		</div>
	);
}
