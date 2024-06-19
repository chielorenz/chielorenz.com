import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
};

const withMDX = createMDX({
	options: {
		// Add markdown plugins here
		remarkPlugins: [
			remarkFrontmatter,
			[remarkMdxFrontmatter, { name: "meta" }],
		],
		// Add rehype plugins here
		rehypePlugins: [rehypeHighlight],
	},
});

export default withMDX(nextConfig);
