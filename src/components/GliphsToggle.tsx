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
		alt: "Toggle gliphs",
		height: 16,
	};

	return (
		<div className="cursor-pointer">
			<Image
				{...commonProps}
				src={toogle}
				className="w-auto hidden gliphs:block gliphs:dark:hidden"
			/>
			<Image
				{...commonProps}
				src={toggleInverted}
				className="w-auto hidden gliphs:dark:block"
			/>
			<Image
				{...commonProps}
				src={toggleDisabled}
				className="w-auto gliphs:hidden"
			/>
		</div>
	);
}
