"use client";
import Image from "next/image";
import toogle from "@/images/glyphs-toggle.svg";
import toggleInverted from "@/images/glyphs-toggle-inverted.svg";
import toggleDisabled from "@/images/glyphs-toggle-disabled.svg";
import { useTheme } from "@/contexts/ThemeProvider";

export default function GlyphsToggle() {
	const { toggleGlyphs } = useTheme();

	const commonProps = {
		onClick: toggleGlyphs,
		alt: "Toggle glyphs",
		width: 16,
	};

	return (
		<div className="cursor-pointer">
			<Image
				{...commonProps}
				src={toogle}
				className="hidden glyphs:light:block"
			/>
			<Image
				{...commonProps}
				src={toggleInverted}
				className="hidden glyphs:dark:block"
			/>
			<Image
				{...commonProps}
				src={toggleDisabled}
				className="hidden no-glyphs:block"
			/>
		</div>
	);
}
