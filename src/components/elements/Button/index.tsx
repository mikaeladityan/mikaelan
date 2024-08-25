import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
const icon = Plus_Jakarta_Sans({ weight: "600", subsets: ["latin"], display: "swap" });
type ButtonProps = {
	children: React.ReactNode;
	route: string;
};
const Button = (props: ButtonProps) => {
	const { children, route } = props;
	return (
		<Link
			href={route}
			className={`${icon.className} bg-white text-black px-4 py-2 rounded-full flex items-center justify-start gap-1 text-xs transition-all ease-in-out duration-200 hover:scale-110`}
		>
			{children}
		</Link>
	);
};

export default Button;
