import Link from "next/link";
import type { PostMeta } from "@/app/api/posts/route";
import { format } from "@/lib/date";

const Post = (postMeta: PostMeta) => {
	return (
		<Link
			href={postMeta.href}
			className="hover:no-underline flex flex-col gap-2"
		>
			<p className="text-sm text-shark-300">{format(postMeta.timestamp)}</p>
			<h1 className="font-semibold text-xl text-havelock-100">
				{postMeta.title}
			</h1>
			<p className="text-shark-300">{postMeta.excerpt}</p>
		</Link>
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

	return <div className="mt-16 flex flex-col gap-16">{posts}</div>;
}
