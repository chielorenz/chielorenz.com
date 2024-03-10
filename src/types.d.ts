declare module "*.mdx" {
	export interface Meta {
		title: string;
		excerpt: string;
		timestamp: string;
		cover: string;
	}

	export const meta: Meta;
}
