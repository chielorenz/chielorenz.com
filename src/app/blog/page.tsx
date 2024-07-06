import Link from "next/link";
import { format } from "@/lib/date";
import { type Metadata } from "next";
import { type PostMeta, getAllPostMeta } from "@/lib/post";

export const metadata: Metadata = {
	title: "Blog",
};

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
	const postsMeta = await getAllPostMeta();
	const posts: React.ReactNode[] = [];

	for (const postMeta of postsMeta) {
		posts.push(<Post key={postMeta.href} {...postMeta} />);
	}

	return <div className="flex flex-col gap-16">{posts}</div>;
}
