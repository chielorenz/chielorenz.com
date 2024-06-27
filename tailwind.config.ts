import type { Config } from "tailwindcss";
import type { PluginUtils } from "tailwindcss/types/config";
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
			typography: ({ theme }: PluginUtils) => ({
				DEFAULT: {
					css: {
						// Light mode code background color
						"--tw-prose-pre-bg": theme("colors.neutral.100/90%"),
						// Dark mode code background color
						"--tw-prose-invert-pre-bg": theme("colors.neutral.800/90%"),
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		plugin(({ addVariant }) => {
			addVariant("glyphs", [".glyphs &", ".glyphs&"]);
			addVariant("no-glyphs", [".no-glyphs &", ".no-glyphs&"]);
			addVariant("light", [".light &", ".light&"]);
		}),
	],
	darkMode: "selector",
};

export default config;
