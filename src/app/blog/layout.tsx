import Link from "next/link";
import Logo from "@/components/Logo";
import Glipsh from "@/components/Gliphs";
import LightSwitch from "@/components/LightSwitch";
import GlipshToggle from "@/components/GliphsToggle";

export default async function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col gap-4 mx-auto my-8 px-8 max-w-screen-md">
			<Glipsh />
			<nav className="flex justify-between">
				<Link href="/">
					<Logo />
				</Link>
				<div className="flex gap-4 items-center">
					<LightSwitch />
					<GlipshToggle />
				</div>
			</nav>
			<div className="mt-8">{children}</div>
		</section>
	);
}
