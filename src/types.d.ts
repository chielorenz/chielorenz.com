declare module "*.mdx" {
	export interface Meta {
		title: string;
		excerpt: string;
		timestamp: string;
		cover: string;
		published: boolean;
	}

	export const meta: Meta;
}
