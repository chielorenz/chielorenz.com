import path from "path";
import { glob } from "glob";
import { Meta } from ".mdx";

export interface PostMeta extends Meta {
	href: string;
	slug: string;
	module: string;
}

async function loadPostsMeta(slug?: string): Promise<PostMeta[]> {
	const baseDir = path.join(process.cwd(), "src/posts/");

	const searchPath = slug || "*";
	const files = await glob(path.join(baseDir, `/**/${searchPath}.mdx`), {
		withFileTypes: true,
	});

	const postsMeta: PostMeta[] = [];
	for (const file of files) {
		const slug = path.parse(file.name).name;
		const href = path.join("blog", slug);
		const modulePath = file.fullpath().replace(baseDir, "");
		// Webpack need come information about static import path see https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
		const post = await import(`@/posts/${modulePath}`);

		if (post.meta.published) {
			postsMeta.push({ ...post.meta, href, slug, module: modulePath });
		}
	}

	postsMeta.sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));

	return postsMeta;
}

export async function getPostMeta(slug: string): Promise<PostMeta> {
	const postsMeta = await loadPostsMeta(slug);
	if (postsMeta.length === 0) {
		throw new Error(`Post not found: ${slug}`);
	}
	return postsMeta[0];
}

export async function getAllPostMeta(): Promise<PostMeta[]> {
	return loadPostsMeta();
}
