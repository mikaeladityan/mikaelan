"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import React from "react";

const people = [
	{
		id: 1,
		name: "Javascript",
		designation: "Frontend",
		image: "/icons/js.png",
	},
	{
		id: 2,
		name: "Frontend",
		designation: "Bootstrap",
		image: "/icons/bootstrap.png",
	},
];

export default function Tech() {
	return (
		<div className="flex flex-row items-center justify-center w-full">
			<AnimatedTooltip items={people} />
		</div>
	);
}
