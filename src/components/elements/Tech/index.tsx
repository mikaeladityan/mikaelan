"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { IconBrandTailwind } from "@tabler/icons-react";
import React from "react";

const people = [
	{
		id: 1,
		name: "John Doe",
		designation: "Software Engineer",
		image: "/images/img_01.jpg",
	},
	{
		id: 2,
		name: "John Doe",
		designation: "Software Engineer",
		image: "/images/img_01.jpg",
	},
];

export default function Tech() {
	return (
		<div className="flex flex-row items-center justify-center w-full">
			<AnimatedTooltip items={people} />
		</div>
	);
}
