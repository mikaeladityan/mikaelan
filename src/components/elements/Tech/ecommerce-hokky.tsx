"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import React from "react";

const tech = [
	{
		id: 1,
		name: "Go",
		designation: "Backend Tech",
		image: "/icons/golang.png",
	},
	{
		id: 2,
		name: "React",
		designation: "Frontend Tech",
		image: "/icons/react.png",
	},
	{
		id: 3,
		name: "Tailwind",
		designation: "CSS Framework",
		image: "/icons/tailwind.png",
	},
];

export default function TechEcommerceHokky() {
	return (
		<div className="flex flex-row items-center justify-center w-full">
			<AnimatedTooltip items={tech} />
		</div>
	);
}
