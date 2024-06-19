import Link from "next/link";
import type { PostMeta } from "@/app/api/posts/route";
import { format } from "@/lib/date";

const Post = (postMeta: PostMeta) => {
	return (
		<div className="flex flex-col gap-2 items-start no-underline">
			<p className="text-sm">{format(postMeta.timestamp)}</p>
			<h1 className="text-lg font-semibold">{postMeta.title}</h1>
			<p>{postMeta.excerpt}</p>
			<Link href={postMeta.href}>Read more</Link>
		</div>
	);
};

export default async function Blog() {
	// TODO use ENV
	const res = await fetch("http://localhost:3000/api/posts");
	const postsMeta: PostMeta[] = await res.json();
	const posts: React.ReactNode[] = [];

	for (const postMeta of postsMeta) {
		posts.push(<Post key={postMeta.href} {...postMeta} />);
	}

	return <div className="flex flex-col gap-8">{posts}</div>;
}
