const script = () => {
	if (localStorage.getItem("gliphs") === "true") {
		document.documentElement.classList.add("gliphs");
	} else {
		document.documentElement.classList.remove("gliphs");
	}
};

export default function ThemeScript() {
	return (
		<script dangerouslySetInnerHTML={{ __html: `(${script.toString()})()` }} />
	);
}
