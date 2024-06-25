"use client";
import { useState, createContext, useContext, useEffect } from "react";

type GliphsContext = {
	enabled: boolean;
	toggleGliphs: () => void;
};

const GliphsContext = createContext<GliphsContext | null>(null);

export function GliphsProvider({ children }: { children: React.ReactNode }) {
	let defaultState: boolean = true;
	try {
		const notSet = localStorage.getItem("gliphs") === null;
		defaultState = notSet || localStorage.getItem("gliphs") === "true";
	} catch (e) {
		console.log("localStorage not available");
	}

	const [enabled, setEnabled] = useState(defaultState);

	useEffect(() => {
		if (enabled) {
			localStorage.setItem("gliphs", "true");
			document.documentElement.classList.add("gliphs");
		} else {
			localStorage.setItem("gliphs", "false");
			document.documentElement.classList.remove("gliphs");
		}
	}, [enabled]);

	useEffect(() => {
		const handleStorage = () => {
			const notSet = localStorage.getItem("gliphs") === null;
			const state = notSet || localStorage.getItem("gliphs") === "true";
			setEnabled(state);
		};
		window.addEventListener("storage", handleStorage);
		return () => window.removeEventListener("storage", handleStorage);
	}, []);

	const toggleGliphs = () => setEnabled(!enabled);

	return (
		<GliphsContext.Provider value={{ enabled, toggleGliphs }}>
			{children}
		</GliphsContext.Provider>
	);
}

export function useGliphs() {
	const context = useContext(GliphsContext);
	if (!context) {
		throw new Error("useGliphs must be used within a GliphsProvider");
	}
	return context;
}
