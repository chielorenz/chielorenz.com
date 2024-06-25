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
		const haskey = localStorage.getItem("gliphs") !== null;
		defaultState = !haskey || localStorage.getItem("gliphs") === "true";
	} catch (e) {}

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
