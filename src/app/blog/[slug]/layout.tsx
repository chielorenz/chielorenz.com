export default async function PostLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="prose">{children}</div>;
}
