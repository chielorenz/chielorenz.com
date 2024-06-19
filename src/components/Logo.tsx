import Image from "next/image";
import logo from "@/images/logo.svg";

export default function Logo() {
	return <Image src={logo} alt="Logo" height={24} />;
}
