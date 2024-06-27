import { createElement } from "react";
import { out } from "outclass";
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
	return createElement(
		href ? Link : "button",
		{
			href: href ?? "",
			className: out.parse(
				"bg-neutral-900 dark:bg-white",
				"text-white dark:text-neutral-900 no-underline",
				"py-0.5 px-2.5 rounded"
			),
		},
		children ?? label
	);
}
