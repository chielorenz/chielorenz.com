import Link from "next/link";

const NavItem = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<Link
		href={href}
		className="hover:no-underline text-havelock-100 font-semibold"
	>
		{children}
	</Link>
);

const Nav = () => (
	<div className="mt-8">
		<div className="flex gap-4 no-underline">
			<NavItem href="/">Home</NavItem>
			<NavItem href="/blog">Blog</NavItem>
		</div>
	</div>
);

export default async function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="mx-auto max-w-screen-lg">
			<Nav />
			<div className="mt-8">{children}</div>
		</section>
	);
}
