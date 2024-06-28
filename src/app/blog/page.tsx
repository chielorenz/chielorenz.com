import Link from "next/link";
import type { PostMeta } from "@/app/api/posts/route";
import { format } from "@/lib/date";

const Post = (postMeta: PostMeta) => {
	return (
		<Link href={postMeta.href} className="group">
			<div className="flex flex-col gap-2 items-start">
				<p className="text-sm">{format(postMeta.timestamp)}</p>
				<h1 className="text-xl font-semibold">{postMeta.title}</h1>
				<p>{postMeta.excerpt}</p>
				<p className="text-sm link">Read more</p>
			</div>
		</Link>
	);
};

export default async function Blog() {
	const res = await fetch(process.env.API_URL + "/api/posts");
	const postsMeta: PostMeta[] = await res.json();
	const posts: React.ReactNode[] = [];

	for (const postMeta of postsMeta) {
		posts.push(<Post key={postMeta.href} {...postMeta} />);
	}

	return <div className="flex flex-col gap-16">{posts}</div>;
}
