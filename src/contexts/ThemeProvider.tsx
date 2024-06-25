"use client";
import { useState, createContext, useContext, useEffect } from "react";

const MODE_KEY = "theme-mode";
const GLYPHS_KEY = "theme-glyphs";

type ThemeMode = "light" | "dark";

type ThemeContext = {
	mode: ThemeMode;
	setMode: (mode: ThemeMode) => void;
	hasGlyphs: boolean;
	toggleGlyphs: () => void;
};

const ThemeContext = createContext<ThemeContext | null>(null);

const getSystemMode = (): ThemeMode => {
	try {
		return window.matchMedia("(prefers-color-scheme: light)").matches
			? "light"
			: "dark";
	} catch (e) {
		return "light";
	}
};

const getSelectedMode = (): ThemeMode | "system" => {
	try {
		return localStorage.getItem(MODE_KEY) !== null
			? (localStorage.getItem(MODE_KEY) as ThemeMode)
			: "system";
	} catch (e) {
		return "system";
	}
};

const resolveMode = (): ThemeMode => {
	const selectedMode = getSelectedMode();
	const systemMode = getSystemMode();
	return selectedMode === "system" ? systemMode : selectedMode;
};

const areGlyphsSelected = (): boolean => {
	try {
		const value = localStorage.getItem(GLYPHS_KEY);
		return value === null || value === "true";
	} catch (e) {
		return true;
	}
};

const modeScript = () => {
	try {
		const systemMode = window.matchMedia("(prefers-color-scheme: light)")
			.matches
			? "light"
			: "dark";
		const value = localStorage.getItem("theme-mode");
		const selectedMode = value !== null ? value : "system";
		const resolvedMode = selectedMode === "system" ? systemMode : selectedMode;

		if (resolvedMode === "light") {
			document.documentElement.classList.add("light");
		} else {
			document.documentElement.classList.add("dark");
		}
	} catch (e) {
		console.error("localStorage is not available", e);
	}
};

const glyphsScript = () => {
	try {
		if (localStorage.getItem("theme-glyphs") === "true") {
			document.documentElement.classList.add("glyphs");
		} else {
			document.documentElement.classList.add("no-glyphs");
		}
	} catch (e) {
		console.error("localStorage is not available", e);
	}
};

export function ThemeScripts() {
	return (
		<>
			<script
				dangerouslySetInnerHTML={{ __html: `(${modeScript.toString()})()` }}
			/>
			<script
				dangerouslySetInnerHTML={{ __html: `(${glyphsScript.toString()})()` }}
			/>
		</>
	);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const resolvedMode = resolveMode();
	const [mode, setMode] = useState<ThemeMode>(resolvedMode);

	useEffect(() => {
		const systemMode = getSystemMode();
		if (mode === "light") {
			if (systemMode === "light") {
				localStorage.setItem(MODE_KEY, "system");
			} else {
				localStorage.setItem(MODE_KEY, "light");
			}
		} else {
			if (systemMode === "light") {
				localStorage.setItem(MODE_KEY, "dark");
			} else {
				localStorage.setItem(MODE_KEY, "system");
			}
		}

		document.documentElement.classList.remove("dark");
		document.documentElement.classList.remove("light");
		document.documentElement.classList.add(mode);
	}, [mode]);

	useEffect(() => {
		const updateMode = () => {
			const resolvedMode = resolveMode();
			setMode(resolvedMode);
		};
		window.addEventListener("storage", updateMode);
		return () => window.removeEventListener("storage", updateMode);
	}, []);

	useEffect(() => {
		const updateMode = () => {
			const resolvedMode = resolveMode();
			setMode(resolvedMode);
		};

		const modeMatchMedia = window.matchMedia("(prefers-color-scheme: light)");
		modeMatchMedia.addEventListener("change", updateMode);
		return () => modeMatchMedia.removeEventListener("change", updateMode);
	}, []);

	const glyphsSelected = areGlyphsSelected();
	const [hasGlyphs, setGlyphs] = useState(glyphsSelected);
	const toggleGlyphs = () => setGlyphs(!hasGlyphs);

	useEffect(() => {
		document.documentElement.classList.remove("glyphs");
		document.documentElement.classList.remove("no-glyphs");
		if (hasGlyphs) {
			localStorage.setItem(GLYPHS_KEY, "true");
			document.documentElement.classList.add("glyphs");
		} else {
			localStorage.setItem(GLYPHS_KEY, "false");
			document.documentElement.classList.add("no-glyphs");
		}
	}, [hasGlyphs]);

	useEffect(() => {
		const updateGlypth = () => {
			const glyphsSelected = areGlyphsSelected();
			setGlyphs(glyphsSelected);
		};
		window.addEventListener("storage", updateGlypth);
		return () => window.removeEventListener("storage", updateGlypth);
	}, []);

	return (
		<ThemeContext.Provider value={{ mode, setMode, hasGlyphs, toggleGlyphs }}>
			<ThemeScripts />
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
