"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import React from "react";

const tech = [
	{
		id: 1,
		name: "Laravel",
		designation: "Backend Tech",
		image: "/icons/laravel.png",
	},
	{
		id: 2,
		name: "Livewire",
		designation: "Frontend Tech",
		image: "/icons/livewire.png",
	},
	{
		id: 3,
		name: "Tailwind",
		designation: "CSS Framework",
		image: "/icons/tailwind.png",
	},
];

export default function TechZuzuki() {
	return (
		<div className="flex flex-row items-center justify-center w-full">
			<AnimatedTooltip items={tech} />
		</div>
	);
}
