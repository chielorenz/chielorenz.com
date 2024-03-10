export const format = (timestamp: string) =>
	new Date(timestamp).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
