import Image from "next/image";
import square from "@/images/gliphs/square.svg";
import squareOut from "@/images/gliphs/square-outline.svg";
import cross from "@/images/gliphs/cross.svg";
import bar from "@/images/gliphs/bar.svg";
import triange from "@/images/gliphs/triangle.svg";
import triangeOut from "@/images/gliphs/triangle-outline.svg";
import circle from "@/images/gliphs/circle.svg";
import circleOut from "@/images/gliphs/circle-outline.svg";

const gliphsSources = [
	square,
	squareOut,
	cross,
	bar,
	triange,
	circleOut,
	circle,
	triangeOut,
];

function getRandom(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) + min);
}

function getGliphSource() {
	return gliphsSources[Math.floor(Math.random() * gliphsSources.length)];
}

export default function Glipsh() {
	const gliphs = [];
	for (let i = 0; i < getRandom(10, 20); i++) {
		gliphs.push(
			<Image
				key={i}
				height={16}
				width={16}
				style={
					{
						// X position and movement
						left: `${getRandom(0, 100)}vw`,
						"--gliph-x": `${getRandom(-50, 50)}vw`,

						// Y position and movement
						top: `${getRandom(0, 100)}vh`,
						"--gliph-y": `${getRandom(-50, 50)}vh`,

						// Animation duration
						"--gliph-duration": `${getRandom(60, 90)}s`,
					} as React.CSSProperties
				}
				src={getGliphSource()}
				className="gliph invisible gliphs:visible"
				alt="Gliph"
			/>
		);
	}
	return <div>{gliphs}</div>;
}
