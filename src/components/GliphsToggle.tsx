"use client";
import Image from "next/image";
import toogle from "@/images/gliphs-toggle.svg";
import toggleInv from "@/images/gliphs-toggle-inverted.svg";
import { useGliphs } from "@/contexts/GliphsProvider";

export default function GliphsToggle() {
	const { toggleGliphs } = useGliphs();

	const commonProps = {
		onClick: () => toggleGliphs(),
		alt: "Gliphs toggle",
		height: 16,
		width: 16,
		style: { width: 16, height: 16 },
	};

	return (
		<div className="cursor-pointer">
			<Image {...commonProps} src={toogle} className="dark:hidden" />
			<Image {...commonProps} src={toggleInv} className="hidden dark:block" />
		</div>
	);
}
