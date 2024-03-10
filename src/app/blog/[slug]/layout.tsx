export default async function PostLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="mx-auto prose prose-invert prose-lg my-12">{children}</div>
	);
}
