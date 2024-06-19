import type { PostMeta } from "@/app/api/posts/route";
import { format } from "@/lib/date";

export default async function Post({ params }: { params: { slug: string } }) {
	// Webpack need some information about static import path see https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
	const Post = await import(`@/posts/${params.slug}.mdx`); // TODO what if file is .md instead of .mdx?
	return (
		<>
			<p>Last updated {format(Post.meta.timestamp)}</p>
			<Post.default />
		</>
	);
}

export async function generateStaticParams() {
	// TODO use env variable
	const res = await fetch("http://localhost:3000/api/posts");
	const postsMeta: PostMeta[] = await res.json();
	return postsMeta.map((postMeta) => postMeta.slug);
}
