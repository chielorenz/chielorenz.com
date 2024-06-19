const sharp = require("sharp");
import path from "path";
import { glob } from "glob";
import { Meta } from ".mdx";

export interface PostMeta extends Meta {
	filename: string;
	href: string;
	slug: string;
}

export async function GET() {
	const files = await glob(process.cwd() + "/src/posts/**/*.mdx", {
		withFileTypes: true,
	});

	const postsMeta: PostMeta[] = [];
	for (const file of files) {
		const fileName = file.name;
		const slug = path.parse(fileName).name;
		const href = path.join("blog", slug);
		// Webpack need come information about static import path see https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
		const post = await import(`@/posts/${file.name}`);

		if (post.meta.published) {
			postsMeta.push({ ...post.meta, fileName, slug, href });
		}
	}

	postsMeta.sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));

	return Response.json(postsMeta);
}
