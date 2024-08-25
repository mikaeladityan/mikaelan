"use client";
import React, { useRef } from "react";
import IconCloud from "../magicui/IconCloud";
const slugs = [
	"typescript",
	"javascript",
	"react",
	"html5",
	"laravel",
	"nextdotjs",
	"mysql",
	"python",
	"react",
	"css3",
	"nodedotjs",
	"express",
	"prisma",
	"postgresql",
	"vercel",
	"git",
	"github",
	"visualstudiocode",
	"codeigniter",
	"go",
	"php",
	"docker",
	"jest",
	"nginx",
	"figma",
	"canva",
	"django",
	"tailwindcss",
	"bootstrap",
];

const Skills = () => {
	const skillsRef = useRef(null);

	return (
		<section
			ref={skillsRef}
			id="skills"
		>
			<div className="my-10">
				<IconCloud iconSlugs={slugs} />
			</div>
		</section>
	);
};

export default Skills;
