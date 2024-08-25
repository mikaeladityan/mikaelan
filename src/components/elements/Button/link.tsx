import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";
const icon = Plus_Jakarta_Sans({ weight: "600", subsets: ["latin"], display: "swap" });

type ButtonLinkProps = {
	children: React.ReactNode;
	route: string;
};

const ButtonLink = (props: ButtonLinkProps) => {
	const { children, route } = props;
	return (
		<Link
			href={route}
			className={`${icon.className} flex items-center justify-start gap-1 text-xs transition-all ease-in-out duration-200 hover:scale-110`}
			target="_blank"
		>
			{children}
		</Link>
	);
};

export default ButtonLink;
