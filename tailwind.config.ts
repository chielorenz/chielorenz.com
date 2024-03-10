import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				havelock: {
					50: "#f2f7fd",
					100: "#e4edfa",
					200: "#c3dbf4",
					300: "#8fbeea",
					400: "#539cdd",
					500: "#3a8ad4",
					600: "#1d63ac",
					700: "#19508b",
					800: "#184474",
					900: "#1a3a60",
					950: "#112540",
				},
				shark: {
					50: "#f4f6f7",
					100: "#e2e8eb",
					200: "#c8d3d9",
					300: "#a2b5be",
					400: "#748e9c",
					500: "#597281",
					600: "#4c606e",
					700: "#42505c",
					800: "#3b464f",
					900: "#353d44",
					950: "#1b2025",
				},
			},
		},
		fontFamily: {
			sans: ["Outfit", "sans-serif"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
