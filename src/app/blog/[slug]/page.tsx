import type { Metadata } from "next";
import type { PostMeta } from "@/app/api/posts/route";
import { format } from "@/lib/date";

export default async function Post({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	const res = await fetch(process.env.API_URL + "/api/posts");
	const postsMeta: PostMeta[] = await res.json();
	const post = postsMeta.find((postMeta) => postMeta.slug === slug);

	// Webpack need some information about static import path see https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
	const Post = await import(`@/posts/${post?.module}`);
	return (
		<>
			<p>Last updated {format(Post.meta.timestamp)}</p>
			<Post.default />
		</>
	);
}

export async function generateStaticParams() {
	const res = await fetch(process.env.API_URL + "/api/posts");
	const postsMeta: PostMeta[] = await res.json();
	return postsMeta.map((postMeta) => postMeta.slug);
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const slug = params.slug;
	const res = await fetch(process.env.API_URL + "/api/posts");
	const postsMeta: PostMeta[] = await res.json();
	const post = postsMeta.find((postMeta) => postMeta.slug === slug);

	return { title: post?.title };
}
