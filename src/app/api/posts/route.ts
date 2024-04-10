const sharp = require("sharp");
import path from "path";
import { glob } from "glob";
import { Meta } from ".mdx";

export interface PostMeta extends Meta {
	filename: string;
	href: string;
	slug: string;
	placeholder: string;
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
			// Generate a small version of the cover to be used as image placeholder, see https://nextjs.org/docs/app/api-reference/components/image#blurdataurl
			const base64 = await sharp(process.cwd() + "/public/" + post.meta.cover)
				.resize({ width: 10 })
				.toFormat("webp")
				.toBuffer()
				.then((buffer: Buffer) => buffer.toString("base64"));
			const placeholder = `data:image/webp;base64,${base64}`;

			postsMeta.push({ ...post.meta, fileName, slug, href, placeholder });
		}
	}

	postsMeta.sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));

	return Response.json(postsMeta);
}
