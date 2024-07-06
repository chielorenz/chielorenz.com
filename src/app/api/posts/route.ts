import path from "path";
import { glob } from "glob";
import { Meta } from ".mdx";

export interface PostMeta extends Meta {
	href: string;
	slug: string;
	module: string;
}

export async function GET() {
	const baseDir = path.join(process.cwd(), "src/posts/");
	const files = await glob(path.join(baseDir, "/**/*.mdx"), {
		withFileTypes: true,
	});

	const postsMeta: PostMeta[] = [];
	for (const file of files) {
		const slug = path.parse(file.name).name;
		const href = path.join("blog", slug);
		const module = file.fullpath().replace(baseDir, "");
		// Webpack need come information about static import path see https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
		const post = await import(`@/posts/${module}`);

		if (post.meta.published) {
			postsMeta.push({ ...post.meta, href, slug, module });
		}
	}

	postsMeta.sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));

	return Response.json(postsMeta);
}
