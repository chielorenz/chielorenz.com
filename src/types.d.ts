declare module "*.mdx" {
	export interface Meta {
		title: string;
		excerpt: string;
		timestamp: string;
		published: boolean;
	}
}
