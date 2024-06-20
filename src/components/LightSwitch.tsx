"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import sun from "@/images/sun.svg";
import moon from "@/images/moon.svg";

export default function LightSwitch() {
	const { setTheme } = useTheme();

	const commonProps = {
		alt: "Switch light mode",
		height: 16,
		width: 16,
		style: { width: 16, height: 16 },
	};
	return (
		<>
			<Image
				{...commonProps}
				src={sun.src}
				onClick={() => setTheme("dark")}
				className="dark:hidden"
			/>
			<Image
				{...commonProps}
				src={moon.src}
				onClick={() => setTheme("light")}
				className="hidden dark:block"
			/>
		</>
	);
}
