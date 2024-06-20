import Link from "next/link";
import Logo from "@/components/Logo";
import LightSwitch from "@/components/LightSwitch";

export default async function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col gap-4 mx-auto my-8 px-8 max-w-screen-md">
			<nav className="flex justify-between">
				<Link href="/">
					<Logo />
				</Link>
				<LightSwitch />
			</nav>
			<div className="mt-8">{children}</div>
		</section>
	);
}
