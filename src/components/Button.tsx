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
	const className =
		"bg-black text-white py-0.5 px-2.5 rounded no-underline dark:bg-white dark:text-black";
	return createElement(
		href ? Link : "button",
		{
			href: href ?? "",
			className,
		},
		children ?? label
	);
}
