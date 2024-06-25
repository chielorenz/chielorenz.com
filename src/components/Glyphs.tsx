import Image from "next/image";
import square from "@/images/glyphs/square.svg";
import squareOut from "@/images/glyphs/square-outline.svg";
import cross from "@/images/glyphs/cross.svg";
import bar from "@/images/glyphs/bar.svg";
import triange from "@/images/glyphs/triangle.svg";
import triangeOut from "@/images/glyphs/triangle-outline.svg";
import circle from "@/images/glyphs/circle.svg";
import circleOut from "@/images/glyphs/circle-outline.svg";

const glyphsSources = [
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

function getGlyphSource() {
	return glyphsSources[Math.floor(Math.random() * glyphsSources.length)];
}

export default function Glipsh() {
	const glyphs = [];
	for (let i = 0; i < getRandom(10, 20); i++) {
		glyphs.push(
			<Image
				key={i}
				height={16}
				width={16}
				style={
					{
						// X position and movement
						left: `${getRandom(0, 100)}vw`,
						"--glyph-x": `${getRandom(-50, 50)}vw`,

						// Y position and movement
						top: `${getRandom(0, 100)}vh`,
						"--glyph-y": `${getRandom(-50, 50)}vh`,

						// Animation duration
						"--glyph-duration": `${getRandom(60, 90)}s`,
					} as React.CSSProperties
				}
				src={getGlyphSource()}
				className="glyph invisible glyphs:visible"
				alt="Glyph"
			/>
		);
	}
	return <div>{glyphs}</div>;
}
