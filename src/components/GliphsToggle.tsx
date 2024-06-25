"use client";
import Image from "next/image";
import toogle from "@/images/gliphs-toggle.svg";
import toggleInverted from "@/images/gliphs-toggle-inverted.svg";
import toggleDisabled from "@/images/gliphs-toggle-disabled.svg";
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
			<Image
				{...commonProps}
				src={toogle}
				className="hidden gliphs:block gliphs:dark:hidden"
			/>
			<Image
				{...commonProps}
				src={toggleInverted}
				className="hidden dark:gliphs:block"
			/>
			<Image {...commonProps} src={toggleDisabled} className="gliphs:hidden" />
		</div>
	);
}
