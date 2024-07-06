import type { Metadata } from "next";
import { format } from "@/lib/date";
import { getPostMeta, getAllPostMeta } from "@/lib/post";

export default async function Post({ params }: { params: { slug: string } }) {
	const postMeta = await getPostMeta(params.slug);

	// Webpack need some information about static import path see https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
	const Post = await import(`@/posts/${postMeta.module}`);
	return (
		<>
			<p>Last updated {format(Post.meta.timestamp)}</p>
			<Post.default />
		</>
	);
}

export async function generateStaticParams() {
	const postsMeta = await getAllPostMeta();
	return postsMeta.map((postMeta) => ({ slug: postMeta.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const postMeta = await getPostMeta(params.slug);
	return { title: postMeta.title };
}
