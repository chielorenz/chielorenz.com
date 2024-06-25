import Image from "next/image";
import logo from "@/images/logo.svg";
import logoInv from "@/images/logo-inverted.svg";

export default function Logo() {
	const commonProps = {
		alt: "Logo",
		style: { width: 40, height: 20 },
	};
	return (
		<>
			<Image {...commonProps} src={logo} className="dark:hidden" />
			<Image {...commonProps} src={logoInv} className="hidden dark:block" />
		</>
	);
}
