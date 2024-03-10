import { createElement } from "react";
import Link from "next/link";

export default function Button({
	label,
	href,
	children,
}: {
	label?: string;
	href?: string;
	children?: React.ReactNode;
}) {
	const className = `flex justify-center items-center font-bold text-sm bg-havelock-500/10 text-havelock-500 hover:bg-havelock-300/10 py-2 px-4 rounded hover:no-underline `;
	return createElement(
		href ? Link : "button",
		{
			href: href ?? "",
			className,
		},
		children ?? label
	);
}
