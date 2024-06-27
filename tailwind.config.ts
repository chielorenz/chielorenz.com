import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Outfit", "sans-serif"],
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						// Light mode code background color
						"--tw-prose-pre-bg": "#f6f8fae6",
						// Dark mode code background color
						"--tw-prose-invert-pre-bg": "#1a1a1ae6",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		plugin(function ({ addVariant }) {
			addVariant("glyphs", [".glyphs &", ".glyphs&"]);
			addVariant("no-glyphs", [".no-glyphs &", ".no-glyphs&"]);
			addVariant("light", [".light &", ".light&"]);
		}),
	],
	darkMode: "selector",
};

export default config;
