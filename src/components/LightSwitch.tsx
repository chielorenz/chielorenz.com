"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import sun from "@/images/sun.svg";
import moon from "@/images/moon.svg";

export default function LightSwitch() {
	const { systemTheme, resolvedTheme, setTheme } = useTheme();

	const toggleTheme = () => {
		if (resolvedTheme === "light") {
			if (systemTheme === "dark") {
				setTheme("system");
			} else {
				setTheme("dark");
			}
		} else {
			if (systemTheme === "light") {
				setTheme("system");
			} else {
				setTheme("light");
			}
		}
	};

	const commonProps = {
		onClick: () => toggleTheme(),
		alt: "Toggle theme",
		height: 16,
		width: 16,
		style: { width: 16, height: 16 },
	};

	return (
		<div className="cursor-pointer">
			<Image {...commonProps} src={sun} className="dark:hidden" />
			<Image {...commonProps} src={moon} className="hidden dark:block" />
		</div>
	);
}
